import types from "./type";

const initialState = {
    text: ''
}

const SearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SEARCH_PRODUCTS:
            return {
                ...state,
                text: action.payload
            }


        default:
            return state
    }
}

export default SearchReducer