import { combineReducers } from "redux";
import persistReducer from "redux-persist/lib/persistReducer";
import storage from "redux-persist/lib/storage";
import CartReducer from "./Cart/CartReducer";
import CartPopUpReducer from "./CartPopUp/CartPopUpReducer";
import fetchDateReducer from "./FetchProducts/fetchDateReducer";
import PopUpReducer from "./Popup/PopUpReducer";
import PriceFilterReducer from "./PriceFilter/PriceFilterReducer";
import ProductViewReducer from "./ProductView/ProductViewReducer";
import SearchReducer from "./Search/SearchReducer";
import SingleProductReducer from "./SingleProductDetails/SingleProductReducer";
import userReducer from "./User/userReducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart','user']
};
const rootReducer = combineReducers({
    popup: PopUpReducer,
    show: CartPopUpReducer,
    products: fetchDateReducer,
    product: SingleProductReducer,
    view: ProductViewReducer,
    priceFilter: PriceFilterReducer,
    Search: SearchReducer,
    cart: CartReducer,
    user:userReducer
})

export default persistReducer(persistConfig, rootReducer)