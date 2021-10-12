import CartTypes from "./type";

const initialState = {
    CartItems: [],
    shippingAddress: {}
}

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CartTypes.ADD_TO_CART:
            const item = state.CartItems.find(item => item._id === action.payload._id)
            return {
                ...state,
                CartItems: item ? state.CartItems.map(item => item._id === action.payload._id ? { ...item, qty: item.qty + 1 } : item) : [...state.CartItems, { ...action.payload, qty: 1 }]
            }
        case CartTypes.CART_REMOVE_ITEM:
            return {
                ...state,
                CartItems: state.CartItems.filter(item => item._id !== action.payload._id)
            }
        case CartTypes.DECREASE_QTY:
            const items = state.CartItems.find(item => item._id === action.payload._id)
            return {
                ...state,
                CartItems: items?.qty === 1 ? state.CartItems.filter(item => item._id !== action.payload._id) :
                    state.CartItems.map(item => item._id === action.payload._id ? { ...item, qty: item.qty - 1 } : item)
            }
        case CartTypes.CART_CLEAR_ALL_ITEMS:
            return {
                ...state,
                CartItems: []
            }
        case CartTypes.CART_SHIPPING_ADDRESS:
            return {
                ...state,
                shippingAddress: action.payload
            }



        default:
            return state
    }
}

export default CartReducer