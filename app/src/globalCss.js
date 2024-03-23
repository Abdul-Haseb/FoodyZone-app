import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #323334;
}
`;

export const Button = styled.button`
  all: unset;
  background-color: #ff4343;
  padding: 10px 16px;
  transition: all ease-in 0.3;
  border-radius: 5px;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
    background-color: #fa3939;
  }
`;
