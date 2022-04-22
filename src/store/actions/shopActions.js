import axios from "axios";

export const SET_PRODUCTS = 'shop/setProducts'

export const ADD_TO_BASKET = 'shop/addToBasket'

export const DELETE_PRODUCT = 'shop/deleteProduct'

export const LOCAL_STORAGE_GET = "shop/localStorageGet"

export const PLUS_COUNTER = "shop/plusCounter"

export const MINUS_COUNTER = "shop/minusCounter"

export const fetchProducts = () => (dispatch) => {
    axios.get('https://fakestoreapi.com/products').then((res) => {
        dispatch({
            type: SET_PRODUCTS,
            payload: res.data,
        })
    })
}

export const addToBasket = (product) => (dispatch) => {
    dispatch({
        type: ADD_TO_BASKET,
        payload: product,
    })
}

export const deleteProduct = (product) => (dispatch) => {
    dispatch({
        type:DELETE_PRODUCT,
        payload:product.id
    })
}

export const localStorageGet = (products) => (dispatch) => {
    dispatch({
        type: LOCAL_STORAGE_GET,
        payload: products
    })
}

export const counterPlus = (product) => (dispatch) => {
    dispatch({
        type: PLUS_COUNTER,
        payload: product
    })
} 

export const counterMinus = (product) => (dispatch) => {
    dispatch({
        type: MINUS_COUNTER,
        payload: product
    })
} 