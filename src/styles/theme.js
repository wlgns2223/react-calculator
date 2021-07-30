import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
export const pallete = {
  darkGray: "#595260",
  gold: "#ffd523",
  gray: "#b2b1b9",
};

export const GlobalStyle = createGlobalStyle`
${reset};
ul {
  list-style: none;
}

body{
  background-color: white;
}
`;
