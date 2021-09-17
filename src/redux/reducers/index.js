import { combineReducers } from "redux";
import detailReducer from "./detailReducer";
import coinReducer from "./coinReducer";
import userReducer from "./userReducer";
const rootReducer = combineReducers({
  currencies: coinReducer,
  product: detailReducer,
  user: userReducer,
});
export default rootReducer;
