import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {MovieItem} from "../components/MovieItem";
import {getStarsByRating} from "../utils/getStarsByRating";
import {Container, Grid, styled} from "@mui/material";

const MovieBlock = styled("div")`
  background-image: ${(props) =>
    `url("https://image.tmdb.org/t/p/original${props.backgroundimageurl}");`};
  width: 100%;
  background-size: cover;
  height: 648px;
  box-sizing: border-box;
  display: flex;
  position: relative;
  margin-bottom: 30px;
  justify-content: center;
  &:before {
    width: 100%;
    height: 100%;
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(
      269.96deg,
      rgba(29, 29, 29, 0) 0.04%,
      rgba(29, 29, 29, 0.8) 99.5%
    );
  }
  .full_description {
    z-index: 1;
    align-self: center;
    justify-self: center;
    max-width: 632px;
  }
  & > div {
    z-index: 1;
  }
`;

const Title = styled("div")`
  font-weight: 500;
  font-size: 34px;
  line-height: 64px;
  z-index: 1;
  margin-bottom: 16px;
  color: white;
`;

const Stars = styled("div")`
  z-index: 1;
  font-size: 20px;
  margin-bottom: 16px;
  color: white;
`;

const Description = styled("div")`
  z-index: 1;
  font-size: 16px;
  line-height: 32px;
  margin-bottom: 16px;
  color: white;
`;

const FlexContainer = styled(Container)`
  display: flex;
  align-items: center;
`

export function MoviePage() {
    const params = useParams();
    const [data, setData] = useState();
    const [similarMovies, setSimilarMovies] = useState();

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/${params.id}?api_key=d65708ab6862fb68c7b1f70252b5d91c&language=ru-RU`
        )
            .then((res) => res.json())
            .then((data) => setData(data));
    }, [params.id]);

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/${params.id}/similar?api_key=d65708ab6862fb68c7b1f70252b5d91c&language=ru-RU`
        )
            .then((res) => res.json())
            .then((data) => setSimilarMovies(data.results));
    }, [params.id]);

    return (
        <div style={{ backgroundColor: "#1d1d1d" }}>
            {data && similarMovies && (
                <div>
                    <MovieBlock backgroundimageurl={data.backdrop_path}>
                        <FlexContainer maxWidth="lg">
                            <div className="full_description">
                                <Stars>{getStarsByRating(data.vote_average)}</Stars>
                                <Title>{data.title}</Title>
                                <Description>{data.overview}</Description>
                            </div>
                        </FlexContainer>
                    </MovieBlock>
                    <Container maxWidth="xl">
                        <Title>Similar Movies</Title>
                        <Grid container spacing={2}>
                            {similarMovies.slice(0,5).map((movie) => (
                                <Grid item xs={12 / 5}>
                                    <MovieItem key={movie.id} movie={movie} />
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </div>
            )}
        </div>
    );
}
