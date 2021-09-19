import { combineReducers } from "redux";
import CartPopUpReducer from "./CartPopUp/CartPopUpReducer";
import PopUpReducer from "./Popup/PopUpReducer";


const rootReducer = combineReducers({
    popup: PopUpReducer,
    show: CartPopUpReducer
})

export default rootReducer