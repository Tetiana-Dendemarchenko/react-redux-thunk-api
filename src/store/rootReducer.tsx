import {combineReducers} from "redux";
import userReducer from "./user/userReducer";
import todoReducer from "./todo/todoReducer";
import commentReducer from "./comment/commentReducer";


const rootReducer = combineReducers({
    user: userReducer,
    todo: todoReducer,
    comment: commentReducer
})

export default rootReducer;
