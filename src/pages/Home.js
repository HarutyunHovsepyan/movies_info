import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { loadMovies } from "../actions/movieAction";
import Movie from "../components/Movie";
import MovieDetail from "../components/MovieDetail";

const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadMovies())
    }, [dispatch])

    const { popular, newMovies, allTimesRated } = useSelector(state => state.movies)
    let allTimesRate = allTimesRated.slice(0, 10)
    let popularMovie = popular.slice(5, 15)
    let newMoviesMovie = newMovies.slice(0, 10)
    return (
        <MovieList>
            <MovieDetail />
            <h2>New movies</h2>
            <Movies>
                {newMoviesMovie.map(movie => (
                    <Movie
                        name={movie.original_title}
                        released={movie.release_date}
                        id={movie.id}
                        image={movie.poster_path}
                        key={movie.id}
                    />
                ))}
            </Movies>
            <h2>The most popular movies of the past 2 years</h2>
            <Movies>
                {popularMovie.map(movie => (
                    <Movie
                        name={movie.original_title}
                        released={movie.release_date}
                        id={movie.id}
                        image={movie.poster_path}
                        key={movie.id}
                    />
                ))}
            </Movies>
            <h2>The most popular movies of all time</h2>
            <Movies>
                {allTimesRate.map(movie => (
                    <Movie
                        name={movie.original_title}
                        released={movie.release_date}
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
    }
`


export default Home