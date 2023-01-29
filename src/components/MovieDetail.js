import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const MovieDetail = () =>{
    const movie =useSelector((state) => state.detail.movie)
    let backdrop_img = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
    return(
        <CardShadow>
            <Detail>
                <div className="stats">
                    <div className="rating">
                        <h3>{movie.original_title}</h3>
                        <p>{movie.vote_average}</p>
                    </div>
                    <div className="info">
                    </div>
                </div>
                <div className="media">
                  <img src={backdrop_img} alt="" />
                </div>
                <div className="description">
                    <p>{movie.overview}</p>
                </div>
            </Detail>
        </CardShadow>
    )
}


const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll ;
    background: rgba(0,0,0,.5);
    position: fixed;
    top:0;
    left:0;
`

const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 20rem;
    background: white;
    position: absolute;
    left: 10%;
    color: black;
    img{
        width: 100%;
    }

`

export default MovieDetail