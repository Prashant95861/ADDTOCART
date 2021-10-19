import * as actionTypes from './shopping-type';

const INITIAL_STATE = {
    products: [
        {
            id:1,
            img:"Images/f0.jpg",
            name:"Cube",
            description:"Best Cube Ever",
            price:10,

        },
        {
            id:2,
            img:"Images/f1.jpg",
            name:"Cofee",
            description:"Best Cofee Ever",
            price:15
        },
        {
            id:3,
            img:"Images/f2.jpg",
            name:"Chocolate",
            description:"Best Chocolate Ever",
            price:20
        }
    ],
    cart: [],
    currentItem: null
}

const shopReducer = (state= INITIAL_STATE,action) => {
    switch(action.type){
        case actionTypes.ADD_TO_CART:

        // Get the item data from the products array    
        const item = state.products.find((prod) => prod.id === action.payload.id );

        // Check item is already in cart
        const inCart = state.cart.find((item) => item.id === action.payload.id ? true : false );

            return{
                ...state,
                cart: inCart ? state.cart.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item )
                    : [...state.cart, { ...item, qty: 1 }],
            }
        case actionTypes.REMOVE_TO_CART:
            return{
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id )
            }   
        case actionTypes.ADJUST_QTY:
            return{
                ...state,
                cart: state.cart.map((item) => item.id === action.payload.id ? { ...item, qty: +action.payload.qty } : item )
            }   
        case actionTypes.LOAD_CURRENT_ITEM:
            return{
                ...state,
                currentItem: action.payload,
            }   
        default:
            return state;       
    }
}

export default shopReducer;