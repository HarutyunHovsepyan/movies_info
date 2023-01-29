import { combineReducers } from "redux";
import movieReducer from "./MoviesReducer";


const initState = {
    name:'',
    isLogged :false
}

const userReducer = (state=initState,action) =>{
    switch(action.type){
        default:
            return {...state}
    }
}

const rootReducer = combineReducers({
    movies: movieReducer,
    user : userReducer
})

export default rootReducer