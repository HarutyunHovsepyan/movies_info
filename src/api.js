const base_url = 'https://api.themoviedb.org/3/movie/'
const API_KEY = `?api_key=${process.env.REACT_APP_URL_KEY}`
const laguagesMovie = `&language=ru-RU&page=1`

export const popularMoviesUrl = () => `${base_url}popular${API_KEY}${laguagesMovie}`
export const allTimeRatedMoviesUrl = () => `${base_url}top_rated${API_KEY}${laguagesMovie}`
export const newMoviesUrl = () => `${base_url}now_playing${API_KEY}${laguagesMovie}`

export const MovieDetailsUrl = (movie_id) => `${base_url}${movie_id}${API_KEY}${laguagesMovie}`