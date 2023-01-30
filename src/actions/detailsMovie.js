import axios from "axios";
import { MovieDetailsUrl } from "../api";

export const loadDetail = (id) => async (dispatch) => {

    dispatch({
        type:'LOADING_DETAIL'
    })
    
    const detailData = await axios.get(MovieDetailsUrl(id))
    dispatch({
        type: 'GET_DETAIL',
        payload: {
            movie: detailData.data,
        }
    })
}

export default loadDetail