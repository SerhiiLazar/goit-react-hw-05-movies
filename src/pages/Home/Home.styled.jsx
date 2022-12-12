import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Main = styled.main``;

export const Title = styled.h1`
font-size: 25px;
display: block;
margin-botton: 10px;
align-items: center;
`;

export const List = styled.ul`
list-style: none;
margin: 0;
padding: 0; 
`;

export const MoviLink = styled.li`
margin-bottom: 10px;
`

export const NavItem = styled(NavLink)`
list-style: none;
color: blue;
text-decoration: none;


:hover:not(.active),
:focus-visible:not(.active) {
    color: red;
}
`;