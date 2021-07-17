import "./App.css";
import { createGlobalStyle } from "styled-components";
import CalculatorTemplate from "./components/CalculatorTemplate";
import CalculatorHeader from "./components/CalculatorHeader";
import CalculatorKeypad from "./components/CalculatorKeypad";
import { CalculatorContext } from "./CalculatorContext";

const GlobalStyle = createGlobalStyle`
body{
  background-color: white;
}
`;

function App() {
  return (
    <CalculatorContext>
      <GlobalStyle />
      <CalculatorTemplate>
        <CalculatorHeader />
        <CalculatorKeypad />
      </CalculatorTemplate>
    </CalculatorContext>
  );
}

export default App;
