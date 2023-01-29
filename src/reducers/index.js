import { combineReducers } from "redux";
import detailReducer from "./detailReducer";
import movieReducer from "./MoviesReducer";

const rootReducer = combineReducers({
    movies: movieReducer,
    detail: detailReducer
})

export default rootReducer