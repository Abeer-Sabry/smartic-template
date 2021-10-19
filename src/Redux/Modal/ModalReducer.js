import Types from "./Types";

const initialState = {
    show: false
}
const ModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.MODAL_POP_UP:
            return {
                ...state,
                show: !state.show
            }


        default:
            return state
    }
}
export default ModalReducer