import {useSearchParams, useLocation} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {Main, MovieList, MovieItem, PosterImg, NavItem} from './Movies.styled';
import * as API from '../../api/api';
import {SearchBox} from '../../components/SearchBox/SearchBox';


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

    const onSubmit = e => {
        e.preventDefault();
        const search = e.currentTarget;

        if(search.elements.query.value.trim() === ''){
            alert('Nothing entered in the search field, please enter');
        return;
        }


        setSearchParams({ query: search.elements.query.value});
        search.reset();
    }

    return (
        <Main>
            <SearchBox onSubmit={onSubmit} />
            {movie && (
                <MovieList>
                    {movie.map(({id, title, poster_path}) => (
                        <MovieItem key={id}>
                            <NavItem to={`${id}`} state={{ from: location }}>
                            <PosterImg
                                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                                alt={title}
                                />
                                {title}
                            </NavItem>
                        </MovieItem>
                    ))}
                </MovieList>
            )}
        </Main>
    )
}

export default Movies;