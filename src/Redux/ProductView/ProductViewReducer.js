import types from "./type";
const initialState = {
    gridView: true
}

const ProductViewReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_GRID_VIEW:
            return {
                ...state, gridView:true
            }
        case types.SET_LIST_VIEW:
            return {
                ...state, gridView:false
            }
        default: return state
    }
}

export default ProductViewReducer