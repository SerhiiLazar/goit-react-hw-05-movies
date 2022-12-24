import styled from "@emotion/styled";
import { HiSearch } from "react-icons/hi";

export const Box = styled.form`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  font: inherit;
`;

export const Icon = styled(HiSearch)`
  width: 20px;
  height: 20px;
  position: absolute;
`;

export const Button = styled.button`
position: relative;
display: flex;
width: 50px;
justify-content: center;
align-items: center;
/* margin: 0; */
margin-left: 5px;
/* padding: 0; */
border-radius: 20%;
height: 40px;
border: none;

:hover:not(.active),
  :focus-visible:not(.active) {
    background-color: orangered;
`;