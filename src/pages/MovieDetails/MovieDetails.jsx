import {useState, useEffect} from 'react';
import {useParams, Outlet} from 'react-router-dom';
import {Main, Box, PosterImg, DetailsMovie, Title, Score, Overview, OverviewContent, Ganres, GanresContent } from './MovieDetails.styled';

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
                        User score: {Math.round(movieDetails.vote_average * 10)}%
                    </Score>
                    <Overview>Overview</Overview>
                    <OverviewContent>{movieDetails.overview}</OverviewContent>
                    <Ganres>Ganres</Ganres>
                    <GanresContent>{movieDetails.genres.map(genre => genre.name).join(', ')}</GanresContent>
                </DetailsMovie>
            </Box>
            <Outlet />
        </Main>
    )
}

export default MovieDetails;