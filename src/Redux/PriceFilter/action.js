import ActionTypes from "./type";

const PriceFilterAction = (text) => (dispatch) => {
    dispatch({
        type: ActionTypes.PRODUCT_PRICE_FILTER,
        payload: text
    })
}
export default PriceFilterAction


