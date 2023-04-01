
export default function fetchRestaurants() {

    return {
        type : 'fetchRestaurants',
        payload : restaurants
    }
}

export default function fetchFoodItems(){
    return{
        type : 'fetchFoodItems',
        payload : foodItems
    }
}

export default function order(){
    return {
        type : 'order'
    }
}

export default function addRestaurant(){
    return {
        type : 'addRestuarant'
    }
}

export default function addFoodItem(){
    return {
        type : 'addFoodItem'
    }
}

export default function addCart(){
    return {
        type : 'addCart'
    }
}