import * as API from '../../api/api';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Main, Title, List, MoviLink, NavItem, PosterImg } from './Home.styled';

const Home = () => {
  const [trendMovis, setTrendMovis] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function fetchMoviTrending() {
      try {
        const trendMovis = await API.getMoviTrending();
        setTrendMovis(trendMovis.results);
      } catch (error) {
        alert('Oops something went wrong, try again.');
      }
    }
    fetchMoviTrending();
  }, []);

  return (
    <Main>
      <Title>Trending Today</Title>
      <List>
        {trendMovis.map(({ id, title, poster_path }) => (
          <MoviLink key={id}>
            <NavItem to={`movies/${id}`} state={{ from: location }}>
              <PosterImg
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
              />
              {title}
            </NavItem>
          </MoviLink>
        ))}
      </List>
    </Main>
  );
};

export default Home;
