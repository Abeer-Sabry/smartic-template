import Types from "./type";
const initialState = {
    products: [],
    loading: false,
    err: {}
}
const fetchDateReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_DATA_REQUEST:
            return {
                ...state,
                products: [],
                loading: true,
                err: {}
            }
        case Types.FETCH_DATA_SUCCESS:
            return {
                ...state,
                products: action.payload,
                loading:false,
                err: {}
            }
        case Types.FETCH_DATA_ERRORR:
            return {
                ...state,
                products: [],
                loading:false,
                err: action.payload
            }



        default:
            return state
    }
}
export default fetchDateReducer