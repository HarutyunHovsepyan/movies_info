import axios from "axios";
import { MovieDetailsUrl, MovieScreenshotUrl } from "../api";

export const loadDetail = (id) => async (dispatch) =>{
    const detailData = await axios.get(MovieDetailsUrl(id))
    const screenShotData = await axios.get(MovieScreenshotUrl(id))

    dispatch({
        type:'GET_DETAIL',
        payload:{
            game:{
                game:detailData.data,
                screen:screenShotData.data
            }
        }
    })
}

export default loadDetail