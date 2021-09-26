import { combineReducers } from "redux";
import CartPopUpReducer from "./CartPopUp/CartPopUpReducer";
import fetchDateReducer from "./FetchProducts/fetchDateReducer";
import PopUpReducer from "./Popup/PopUpReducer";
import ProductViewReducer from "./ProductView/ProductViewReducer";
import SingleProductReducer from "./SingleProductDetails/SingleProductReducer";


const rootReducer = combineReducers({
    popup: PopUpReducer,
    show: CartPopUpReducer,
    products: fetchDateReducer,
    product: SingleProductReducer,
    view:ProductViewReducer
})

export default rootReducer