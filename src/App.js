import "./App.css";
import { createGlobalStyle } from "styled-components";
import CalculatorTemplate from "./components/CalculatorTemplate";
import CalculatorKeypad from "./containers/CalculatorKeypad";
import CalculatorScreen from "./containers/CalulatorScreen";

const GlobalStyle = createGlobalStyle`
body{
  background-color: white;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <CalculatorTemplate>
        <CalculatorScreen />
        <CalculatorKeypad />
      </CalculatorTemplate>
    </>
  );
}

export default App;
