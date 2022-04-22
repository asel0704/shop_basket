import {SET_MOVIES, SET_MOVIES_PAGE_INFO, SET_MOVIES_QUERY, SET_MOVIES_SORT_BY} from "../actions/fetchMovies";

const initState = {
    movies: [],
    query: '',
    pageInfo: {
        page: 1,
        total_pages: 0,
    },
    sortBy: 'popularity.desc',
}
export function movies(state = initState, action) {
    const newState = {...state}

    switch (action.type) {
        case SET_MOVIES:
            newState.movies = action.payload
            break;
        case SET_MOVIES_PAGE_INFO:
            newState.pageInfo = action.payload
            break;
        case SET_MOVIES_QUERY:
            newState.query = action.payload
            break;
        case SET_MOVIES_SORT_BY:
            newState.sortBy = action.payload
            break;
        default:
            return state;
    }

    return newState
}
