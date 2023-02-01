import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import loadDetail from "../actions/detailsMovie";
import { Link } from "react-router-dom";
import { popup } from "../style/Animation";


const Movie = ({ name, released, image, id }) => {
    let posterUrl = `https://image.tmdb.org/t/p/w500${image}`;
    const dispatch = useDispatch()
    const loadDetailHandler = () => {
        document.body.style.overflow ='hidden'
        dispatch(loadDetail(id))
    }
    return (
        <StyledMovies variants={popup} initial='hidden' animate='show' layoutId={id} onClick={loadDetailHandler}>
            <Link to={`/movie/${id}`}>
                <h3>{name}</h3>
                <p>{released}</p>
                <img src={posterUrl} alt="no backgDrop_img" />
            </Link>
        </StyledMovies>
    )
}

const StyledMovies = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 30px rgba(0,0,0,.2);
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
    img{
        width: 100%;
    }
`
export default Movie