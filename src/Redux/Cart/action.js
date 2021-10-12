import CartTypes from './type'

// actions
const addToCartAction = (item) => ({
    type: CartTypes.ADD_TO_CART,
    payload: item

});
export default addToCartAction

export const removeFromCartAction = (item) => ({
    type: CartTypes.CART_REMOVE_ITEM,
    payload: item
})
export const decreaseQtyAction = (item) => ({
    type: CartTypes.DECREASE_QTY,
    payload: item
})

export const clearCartAction = () => ({
    type: CartTypes.CART_CLEAR_ALL_ITEMS,
})
export const cartSaveShippingAddress = (data) => ({
    type: CartTypes.CART_SHIPPING_ADDRESS,
    payload: data
})
export const cartPaymentMethod = (data) => ({
    type: CartTypes.CART_PAYMENT_METHOD,
    payload: data
})