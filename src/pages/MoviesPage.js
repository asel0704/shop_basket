import {useCallback, useEffect} from "react";
import {
    Button,
    Container,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Pagination,
    Select,
    TextField
} from "@mui/material";
import {MovieItem} from "../components/MovieItem";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovies, SET_MOVIES_QUERY, SET_MOVIES_SORT_BY} from "../store/actions/fetchMovies";

export function MoviesPage() {
    const movies = useSelector((state) => state.movies.movies)
    const sortBy = useSelector((state) => state.movies.sortBy)
    const query = useSelector((state) => state.movies.query)
    const pageInfo = useSelector((state) => state.movies.pageInfo)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMovies())
    }, [dispatch])

    const setSortBy = useCallback((payload) => {
        dispatch({ type: SET_MOVIES_SORT_BY, payload })
    }, [dispatch])
    const setQuery = useCallback((payload) => {
        dispatch({ type: SET_MOVIES_QUERY, payload })
    }, [dispatch])
    const searchMovies = useCallback(({page = 1, sort = sortBy} = {}) => {
        dispatch(fetchMovies({ page, sort, query }))
    }, [dispatch, query, sortBy])


    return (
        <Container maxWidth="xl">
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <h1>Movies</h1>
                <div style={{ marginLeft: 'auto', flexGrow: 1, maxWidth: '300px' }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={sortBy}
                            label="Sort by"
                            disabled={query && query.length > 0}
                            onChange={(e) => {
                                setSortBy(e.target.value);
                                searchMovies({ sort: e.target.value })
                            }}
                            size="small"
                        >
                            <MenuItem value="popularity.desc">Popularity</MenuItem>
                            <MenuItem value="release_date.desc">Release Date</MenuItem>
                            <MenuItem value="vote_average.desc">Rating</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div style={{ marginLeft: '5px' }}>
                    <TextField value={query} onChange={(e) => setQuery(e.target.value)} size="small" label="Search" />
                    <Button onClick={() => searchMovies()}>Search</Button>
                </div>
            </div>
            <Grid container spacing={2}>
                {movies?.map((movie) => (
                    <Grid item xs={12 / 5}>
                        <MovieItem key={movie.id} movie={movie} />
                    </Grid>
                ))}
            </Grid>

            <Pagination count={pageInfo.total_pages} page={pageInfo.page} onChange={(e, value) => searchMovies({ page: value })}/>
        </Container>
    )
}
