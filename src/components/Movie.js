import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import loadDetail from "../actions/detailsMovie";

const Movie = ({ name, released, image, id }) => {
    let posterUrl = `https://image.tmdb.org/t/p/w500${image}`;

    const dispatch = useDispatch()

    const loadDetailHandler = () => {
        dispatch(loadDetail(id))
    }
    return (
        <StyledMovies onClick={loadDetailHandler}>
            <h3>{name}</h3>
            <p>{released}</p>
            <img src={posterUrl} alt="no backgDrop_img" />
        </StyledMovies>
    )
}


const StyledMovies = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 30px rgba(0,0,0,.2);
    text-align: center;
    border-radius: 1rem;
    img{
        width: 80%;
    }
`
export default Movie