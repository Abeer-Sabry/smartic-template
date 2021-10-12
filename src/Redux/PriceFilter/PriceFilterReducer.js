
import ActionTypes from "./type";

const initialState = {
    sort: '',

}

const PriceFilterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.PRODUCT_PRICE_FILTER:
            return {
                ...state,
                sort: action.payload,
                // allproducts: products
            }

        default:
            return state
    }
}

export default PriceFilterReducer