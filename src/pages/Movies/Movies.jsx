import {NavLink, useSearchParams, useLocation} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {Main, MovieList, MovieItem} from './Movies.styled';
import * as API from '../../api/api';

const Movies = () => {
    const [movie, setMovie] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const movieName = searchParams.get('query') ?? '';

    useEffect(() => {
        if(movieName.trim() === '') return;

        async function fetchSearchMovie() {
            try{
                const movie = await API.getMoviSearch(movieName);
                if (movie.total_results === 0){
                    alert('worn')

                    return;
                }
                setMovie(movie.results);
            } catch (error) {
                alert('worning');
            }
        }

        fetchSearchMovie();
    }, [movieName]);

    return (
        <Main>
            {movie && (
                <MovieList>
                    {movie.map(({id, title}) => (
                        <MovieItem key={id}>
                            <NavLink to={`${id}`} status={{ from: location }}>
                                {title}
                            </NavLink>
                        </MovieItem>
                    ))}
                </MovieList>
            )}
        </Main>
    )
}

export default Movies;