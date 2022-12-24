import styled from "@emotion/styled";
import {NavLink} from 'react-router-dom';

export const Main = styled.main`

`;

export const Box = styled.div`
display: flex;
padding: 5px;
`;

export const NavItem = styled(NavLink)`
padding: 8px 16px;
border-radius: 4px;
text-decoration: none;
color: black;
font-weight: 500;

&.active {
    color: white;
    background-color: orangered;
  }

:hover:not(.active),
:focus-visible:not(.active) {
    color: red;
}
`;

export const PosterImg = styled.img``;

export const DetailsMovie = styled.div`
padding: 10px;
background-color: #f3eae8;
`;

export const Title = styled.h2`
color: orangered;
`;

export const Score = styled.p``;

export const Overview = styled.h3`
color: orangered;
`;

export const OverviewContent = styled.p``;

export const Ganres = styled.h3`
color: orangered;
`;

export const GanresContent = styled.p``;

export const BlokInfo = styled.div``;

export const BlokInfoTitle = styled.h3``;

export const BlokInfoList = styled.ul`
list-style: none;
text-transform: uppercase;
font-weight: 700;
padding: 0;
`;

export const BlokInfoItem = styled.li``;



