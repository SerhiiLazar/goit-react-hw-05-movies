import {useState, useEffect} from 'react';
import {useParams } from 'react-router-dom';
import {Main, Box, PosterImg, DetailsMovie, Title, Score, Overview } from './MovieDetails.styled';

import * as API from '../../api/api';

const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        async function fetchMovieDetails() {
            try {
                const movieDetails = await API.getMovieDetails(id);
                setMovieDetails(movieDetails);

            } catch(error) {
                alert('ooops')
            }
        }
        fetchMovieDetails();
    }, [id]);

    if (!movieDetails) {
        return null;
    }

    return (
        <Main>
            <Box>
                <PosterImg 
                src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                alt={movieDetails.title} />
                <DetailsMovie>
                    <Title>{movieDetails.title}</Title>
                    <Score>
                        User score: {Math.round(movieDetails.vot_average * 10)}%
                    </Score>
                    <Overview></Overview>
                </DetailsMovie>
            </Box>
        </Main>
    )
}

export default MovieDetails;