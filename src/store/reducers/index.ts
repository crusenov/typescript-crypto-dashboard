import { combineReducers } from "redux";
import cryptoReducer from "./cryptoReducer/cryptoReducer";

const rootReducer = combineReducers({
  cryptoReducer
})

export type ReduxRootState = ReturnType<typeof rootReducer>;

export default rootReducer