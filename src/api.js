const base_url = 'https://api.themoviedb.org/3/movie/'
const API_KEY = `?api_key=4d6fe7e955be26b8c302283b79f02745`
const laguagesMovie = `&language=ru-RU&page=1`

export const popularMoviesUrl = () => `${base_url}popular${API_KEY}${laguagesMovie}`
export const allTimeRatedMoviesUrl = () => `${base_url}top_rated${API_KEY}${laguagesMovie}`
export const newMoviesUrl = () => `${base_url}now_playing${API_KEY}${laguagesMovie}`

export const MovieDetailsUrl = (movie_id) => `${base_url}${movie_id}${API_KEY}${laguagesMovie}`