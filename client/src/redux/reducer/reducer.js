
import { fetchFoodItems, fetchCart, fetchRestaurants, order, addCart, addFoodItem, addRestaurant } from '../actions/type';
import { initialState } from '../store/store.js'
import { ethers } from 'ethers';
import contractInfo from '../../assets/polygontest.json';
import resabi from '../../assets/abi.json';
const provider = new ethers.providers.Web3Provider(window.ethereum);

async function addFood(food){

    const restaurantContract = new ethers.Contract(contractInfo.address, resabi, provider);
    const response = await addFoodItem(food.name, food.description, food.price);

}

async function placeFoodOrder(order){

    const restaurantContract = new ethers.Contract(contractInfo.address, resabi, provider);
    
    
    
}

async function getRestaurants() {

    const restaurantContract = new ethers.Contract(contractInfo.address, resabi, provider);

    const restaurants = await restaurantContract.getRestaurants();
    return restaurants;
}

async function getFoodItems(rid){

    const restaurantContract = new ethers.Contract(contractInfo.address, resabi, provider);
    const foodItems = await restaurantContract.getFoodItems(rid);
    return foodItems;
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {

        case addCart: return {
            ...state,
            cart: [
                ...state.cart,
                {
                    rid: action.payload.rid,
                    fid: action.payload.fid
                }
            ]
        }

        case fetchRestaurants : return {
            ...state, 
            restaurants : getRestaurants()
        }

        case addRestaurant: return {
            ...state,
            restaurants : [
                ...state.restaurants, 
                action.payload.restaurant
            ]
        }  

        case fetchFoodItems : return{
            ...state,
            foodItems : getFoodItems(action.payload.rid)
        }

        case order : ()=>{
            placeFoodOrder(action.payload.order);
            return {
                ...state, 
                myOrder : [
                    ...state.myOrder,
                    action.payload.order
                ]
            }
        }

        case addFoodItem : () => {
            addFood(action.payload.food);
            return state;
        }
    }
}