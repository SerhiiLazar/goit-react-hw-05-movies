import * as API from '../../api/api';
import { useEffect, useState } from 'react';
import { Main, Title, List, MoviLink, NavItem } from './Home.styled';

const Home = () => {
  const [trendMovis, setTrendMovis] = useState([]);
  useEffect(() => {
    async function fetchMoviTrending() {
      try {
        const trendMovis = await API.getMoviTrending();
        setTrendMovis(trendMovis.results);
        
      } catch (error) {
        alert('Eror');
      }
    }
    fetchMoviTrending();
  }, []);
  
  return (
    <Main>
      <Title>Trending Today</Title>
      <List>
        {trendMovis.map(({id, title}) => (
          <MoviLink key={id}>
            <NavItem to={`movies/${id}`}>{title}</NavItem>
          </MoviLink>
        ))}
      </List>
    </Main>
  );
};

export default Home;