import { createStore, applyMiddleware } from "redux";
import rootReducer from './rootReducer'
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const Middlewares = [thunk]
const stroe = createStore(rootReducer, composeWithDevTools(applyMiddleware(...Middlewares)))
export default stroe