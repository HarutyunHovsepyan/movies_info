import axios from "axios";
import { popularMoviesUrl,newMoviesUrl,upcomingMoviesUrl } from "../api";


export const loadMovies = () => async (dispatch) =>{
    const popularData = await axios.get(popularMoviesUrl())
    const upcomingMoviesData = await axios.get(upcomingMoviesUrl())
    const newMoviesData= await axios.get(newMoviesUrl())
    dispatch({
        type:'FETCH_MOVIES',
        payload:{
            popular: popularData.data.results,
            newMovies: newMoviesData.data.results,
            upcoming: upcomingMoviesData.data.results,
        }
    })
}