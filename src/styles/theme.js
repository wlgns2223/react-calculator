import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
export const pallete = {
  darkGray: "#595260",
  gold: "#ffd523",
  gray: "#b2b1b9",
};

export const size = {
  medium: "425px",
  large: "580px",
};

export const mediaQueries = {
  medium: `screen and (min-width: ${size.medium})`,
  large: `screen and (min-width: ${size.large})`,
};

const themes = {
  pallete,
  mediaQueries,
};

export default themes;

export const GlobalStyle = createGlobalStyle`
${reset};
ul {
  list-style: none;
}

body{
  background-color: white;
}
`;
