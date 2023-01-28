import { ActionTypes } from "../types/productsTypes";


export const setProduct = (products) => {
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload: products
    }
}