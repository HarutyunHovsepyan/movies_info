import axios from "axios";
import { popularMoviesUrl,newMoviesUrl,allTimeRatedMoviesUrl } from "../api";


export const loadMovies = () => async (dispatch) =>{
    const popularData = await axios.get(popularMoviesUrl())
    const allTimeRatedMoviesData = await axios.get(allTimeRatedMoviesUrl())
    const newMoviesData= await axios.get(newMoviesUrl())
    dispatch({
        type:'FETCH_MOVIES',
        payload:{
            popular: popularData.data.results,
            newMovies: newMoviesData.data.results,
            allTimesRated: allTimeRatedMoviesData.data.results,
        }
    })
}