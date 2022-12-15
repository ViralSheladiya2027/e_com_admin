import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";

const DEFAULT_REDUCER = (initstate ,action)=>{
    return{
        key:"HELLO WORLD",
     }
     
}
 const rootReducer = combineReducers({
    DEFAULT:DEFAULT_REDUCER,
    categories: categoryReducer,
 })

 export default rootReducer;