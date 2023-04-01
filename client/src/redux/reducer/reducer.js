
import { fetchFoodItems, fetchCart, fetchRestaurants, order, addCart, addFoodItem, addRestaurant } from '../actions/type';
import { ethers } from 'ethers';
import contractInfo from '../../assets/polygontest.json';
import resabi from '../../assets/abi.json';
import { useEffect } from 'react';

const provider = new ethers.providers.Web3Provider(window.ethereum);

const initialState = {
    restaurants: [],
    cart: [],
    foodItems: [],
    myOrders: [],
    isRegistered: false
}


// async function addFood(food){

//     const restaurantContract = new ethers.Contract(contractInfo.address, resabi, provider);
//     const response = await addFoodItem(food.name, food.description, food.price);

// }

// async function placeFoodOrder(order){

//     const restaurantContract = new ethers.Contract(contractInfo.address, resabi, provider);

// }

// if (window.ethereum) {
//     // MetaMask is available

//     window.ethereum.request({ method: 'eth_requestAccounts' })
//         .then((accounts) => {
//             // User has authorized the app
//             const account = accounts[0];
//             console.log(`Connected to MetaMask account: ${account}`);
//         })
//         .catch((error) => {
//             // User has denied the app or MetaMask is not available
//             console.log(`Failed to connect to MetaMask: ${error.message}`);
//         });
// } else {
//     // MetaMask is not available
//     window.ethereum.enable();
// }

// async function getRes() {

//     const restaurantContract = new ethers.Contract(contractInfo.address, resabi, provider);
//     const restaurants = await restaurantContract.getRestaurants();
//     console.log(restaurants);
// }

// async function addRes() {
//     try {

//         const restaurantContract = new ethers.Contract(contractInfo.address, resabi, provider.getSigner());
//         const ownerAddress = await restaurantContract.owner();
//         const ownerBalance = await provider.getBalance(ownerAddress);
//         console.log(ownerBalance.toString());
//         const functionInputs = ['pizza hut', 'description dakdjkjfhdksfkjkjhfs', 'continental', 'Delhi'];
//         const functionOptions = { value: ethers.utils.parseEther('0.000000000000001'), gasLimit: 30000 };
//         console.log('hi there');
//         const res = await restaurantContract.addRestaurants(...functionInputs, functionOptions);
//         console.log(res);
//         const receipt = await res.wait();
//         console.log(receipt.blockNumber);
//     } catch (error) {
//         console.error(error);
//     }
// }

// useEffect(() => {
//     addRes();
// })


// async function getFoodItems(rid){

//     const restaurantContract = new ethers.Contract(contractInfo.address, resabi, provider);
//     const foodItems = await restaurantContract.getFoodItems(rid);
//     return foodItems;
// }

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

        case fetchRestaurants: return {
            ...state,
            restaurants: action.payload
        }

        // case addRestaurant: return {
        //     ...state,
        //     restaurants : [
        //         ...state.restaurants, 
        //         action.payload.restaurant
        //     ]
        // }  

        // case fetchFoodItems : return{
        //     ...state,
        //     foodItems : getFoodItems(action.payload.rid)
        // }

        // case order : ()=>{
        //     placeFoodOrder(action.payload.order);
        //     return {
        //         ...state, 
        //         myOrder : [
        //             ...state.myOrder,
        //             action.payload.order
        //         ]
        //     }
        // }

        // case addFoodItem : () => {
        //     addFoodItem(action.payload.food);
        //     return state;
        // }
    }
}