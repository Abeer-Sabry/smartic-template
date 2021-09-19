import types from "./type";

const initialState = {
    show: false
}

const CartPopUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CART_POP_UP:
            return {
                ...state, show: !state.show
            }
        default: return state
    }
}

export default CartPopUpReducer