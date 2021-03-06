import * as actionTypes from './shopping-type';

export const addToCart = (itemID) => {
    return{
        type:actionTypes.ADD_TO_CART,
        payload:{
            id:itemID
        }
    }
}

export const removeToCart = (itemID) => {
    return{
        type:actionTypes.REMOVE_TO_CART,
        payload:{
            id:itemID
        }
    }
}

export const adjustQty = (itemID,value) => {
    return{
        type:actionTypes.ADJUST_QTY,
        payload:{
            id:itemID,
            qty:value,
        }
    }
}

export const loadCurrentItem = (item) => {
    return {
        type:actionTypes.LOAD_CURRENT_ITEM,
        payload:item,
    }
}