const base_url = 'https://api.themoviedb.org/3/'
const API_KEY = `api_key=${process.env.REACT_APP_URL_KEY}`

export const popularMoviesUrl = () => `${base_url}trending/all/day?${API_KEY}&language=en-US&page=1`
export const upcomingMoviesUrl = () => `${base_url}movie/upcoming?${API_KEY}&language=en-US&page=1`
export const newMoviesUrl = () => `${base_url}movie/now_playing?${API_KEY}&language=en-US&page=1`

