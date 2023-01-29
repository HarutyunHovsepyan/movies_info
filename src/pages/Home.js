import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { loadMovies } from "../actions/movieAction";
import Movie from "../components/Movie";

const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadMovies())
    }, [dispatch])

    const { popular, newMovies, upcoming } = useSelector(state => state.movies)
    let upcomingMovie = upcoming.slice(0,10)
    return (
        <MovieList>
            <h2>Upcoming Movies</h2>
            <Movies>
                {upcomingMovie.map(movie => (
                    <Movie 
                        name={movie.original_title }
                        released={movie.released} 
                        id={movie.id}
                        image={movie.poster_path}
                        key={movie.id}
                    />
                ))}
            </Movies>
        </MovieList>
    )
}


const MovieList = styled(motion.div)`
    padding: 0rem 5rem;
    h2{
        padding: 5rem 0rem;
    }
`

const Movies = styled(motion.div)`
    min-height: 80vh;
    display:grid;
    grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
    gap:5rem 3rem;
    img{
        width: 100%;
        height: 80vh;
        object-fit: cover;
        border-radius: 1rem;
        clear: both
    }
`


export default Home