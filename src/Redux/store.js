import { createStore, applyMiddleware } from "redux";
import rootReducer from './rootReducer'
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const Middlewares = [thunk]
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...Middlewares)))
export const persistor = persistStore(store)