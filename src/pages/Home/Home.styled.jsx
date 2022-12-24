import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Main = styled.main``;

export const Title = styled.h1`
font-size: 25px;
display: block;
margin-botton: 10px;
align-items: center;
`;

export const PosterImg = styled.img`
margin-bottom: 5px;
width: 300px;
height: auto;
`;

export const List = styled.ul`
display: grid;
max-width: calc(100vw - 48px);
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
grid-gap: 16px;
margin-top: 0;
margin-bottom: 0;
padding: 0;
list-style: none;
margin-left: auto;
margin-right: auto;
`;

export const MoviLink = styled.li`
margin-bottom: 10px;


`

export const NavItem = styled(NavLink)`
list-style: none;
color: blue;
text-decoration: none;

display:flex;
flex-direction: column;
align-items: center;

:hover:not(.active),
:focus-visible:not(.active) {
    color: red;
}
`;
