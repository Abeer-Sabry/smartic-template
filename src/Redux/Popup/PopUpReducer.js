import ActionsTypes from "./type";

const initialState = {
    popup: false
}
const PopUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionsTypes.POP_UP:
            return {
                ...state, popup: !state.popup
            }
        default: return state
    }
}

export default PopUpReducer