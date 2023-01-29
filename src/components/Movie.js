import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Movie = ({ name, released, image }) => {
    let posterUrl = `https://image.tmdb.org/t/p/w500${image}`;
    return (
        <StyledMovies>
            <h3>{name}</h3>
            <p>{released}</p>
            <img src={posterUrl} alt="please send " />
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