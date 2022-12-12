import { Routes, Route } from "react-router-dom";
// import * as API from '../../api/api'
// import { useEffect } from 'react';
import {Wrapper} from './App.styled';
import {SharedLayout} from '../SharedLayout/SharedLayout';
import {Home} from '../../pages/Home/Home';

export const App = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<SharedLayout  />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Wrapper>
  );
};



