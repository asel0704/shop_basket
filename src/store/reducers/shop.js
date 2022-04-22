import {ADD_TO_BASKET, SET_PRODUCTS, DELETE_PRODUCT, LOCAL_STORAGE_GET, PLUS_COUNTER, MINUS_COUNTER} from '../actions/shopActions'

const initState = {
    products: [],
    basket: [],
}
export function shop(state = initState, action) {
    const newState = {...state}
    switch (action.type) {
        case SET_PRODUCTS:
            newState.products = action.payload;
            break;
        case ADD_TO_BASKET:
            newState.basket = [...newState.basket, action.payload];
            localStorage.setItem("basket", JSON.stringify(newState.basket))
            break;
        case DELETE_PRODUCT: 
            newState.basket = newState.basket.filter(item => item.id !== action.payload);
            localStorage.setItem("basket", JSON.stringify(newState.basket))
            break;
        case LOCAL_STORAGE_GET:
            newState.basket = action.payload; 
            break;
        case PLUS_COUNTER: 
            newState.basket = newState.basket.map(item => {
                if (item.id === action.payload.id){
                    item.counter += 1;
                }
                return item;
            })
            break;
        case MINUS_COUNTER:
            newState.basket = newState.basket.map(item => {
                if (item.id === action.payload.id){
                    item.counter -= 1;
                }
                return item;
            })
            break;
        default:
            return state
    }
    return newState;
}
