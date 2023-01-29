const initState = {
    popular: [],
    newMovies: [],
    upcoming: []
}

const movieReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_MOVIES':
            return { 
                ...state ,
                popular:action.payload.popular,
                newMovies:action.payload.newMovies,
                upcoming:action.payload.upcoming    ,
            }
        default:
            return { ...state }
    }
}

export default movieReducer