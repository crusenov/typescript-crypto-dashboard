import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { sagaMiddleware, combineSagas } from "./middleware";

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(combineSagas);

export default store;
