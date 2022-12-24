import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";


export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 3px;
  margin-bottom: 16px;
  border: 1px solid black;
  box-shadow: 0 2px 5px rgb(0 0 0 / 20%), 0 4px 6px rgb(0 0 0 / 20%);

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
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
    color: orangered;
  }
`;