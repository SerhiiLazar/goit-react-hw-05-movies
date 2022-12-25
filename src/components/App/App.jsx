import { Routes, Route } from 'react-router-dom';
// import * as API from '../../api/api'
// import { useEffect } from 'react';
import { lazy } from 'react';
import { Wrapper } from './App.styled';
// import {SharedLayout} from '../SharedLayout/SharedLayout';
// import {Home} from '../../pages/Home/Home';
// import {Movies} from '../../pages/Movies/Movies';
// import { MovieDetails } from "../../pages/MovieDetails/MovieDetails";

const SharedLayout = lazy(() => import('../SharedLayout'));
const Home = lazy(() => import('../../pages/Home'));
const Movies = lazy(() => import('../../pages/Movies'));
const MovieDetails = lazy(() => import('../../pages/MovieDetails'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews'));

export const App = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </Wrapper>
  );
};
