import types from "./type";

const initialState = {
    product: {},
    loading: false,
    err: {}
}

const SingleProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_DETAILS_REQUEST:
            return {
                ...state,
                product: {},
                loading: true,
                err: {}
            }
        case types.FETCH_DETAILS_SUCCESS:
            return {
                ...state,
                product: action.payload,
                loading: false,
                err: {}
            }
        case types.FETCH_DETAILS_ERROR:
            return {
                ...state,
                product: {},
                loading: false,
                err: action.payload
            }


        default:
            return state
    }
}
export default SingleProductReducer