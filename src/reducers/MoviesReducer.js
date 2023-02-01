const initState = {
    popular: [],
    newMovies: [],
    allTimesRated: [],
}

const movieReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_MOVIES':
            return { 
                ...state ,
                popular:action.payload.popular,
                newMovies:action.payload.newMovies,
                allTimesRated:action.payload.allTimesRated,
            }
        default:
            return { ...state }
    }
}

export default movieReducer