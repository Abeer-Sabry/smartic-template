import types from "./type";

const searchProductAction = (text) => (dispatch) => {
    dispatch({
        type: types.SEARCH_PRODUCTS,
        payload: text
    })

}

export default searchProductAction