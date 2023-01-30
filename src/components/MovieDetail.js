import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";

const MovieDetail = ({pathId}) => {
    const {movie,isLoading} = useSelector((state) => state.detail)
    let poster_path = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const navigate = useNavigate()
    const exitDetailHandler =(e) =>{
        const element = e.target;
        if(element.classList.contains('shadow')){
            document.body.style.overflow ='auto';
            navigate('/')
        }
    }
    return (
        <>
          {!isLoading &&(
             <CardShadow className="shadow" onClick={exitDetailHandler}>
                <Detail layoutId={pathId}>
                    <Stats>
                        <div className="rating">
                            <h3>{movie.original_title}</h3>
                            <p>Raiting : {movie.vote_average}</p>
                        </div>
                    </Stats>
                    <Media>
                        <img src={poster_path} alt="" />
                    </Media>
                    <Description>
                        <p>{movie.overview}</p>
                    </Description>
                </Detail>
            </CardShadow>)}
        </>
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

    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: pink;
    }
    &::-webkit-scrollbar-track{
        background-color: white;
    }
`

const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: white;
    position: absolute;
    left: 10%;
    color: black;
    img{
        width: 100%;
    }
`

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Media = styled(motion.div)`
    margin-top: 5rem;
    img{
        width: 100%;
        height: auto;
        object-fit: cover;
    }
`

const Description = styled(motion.div)`
    margin: 5rem 0rem;
`

export default MovieDetail