import "./App.css";
import CalculatorTemplate from "./components/CalculatorTemplate";
import CalculatorKeypad from "./containers/CalculatorKeypad";
import CalculatorScreen from "./containers/CalulatorScreen";
import { GlobalStyle } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { pallete } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={pallete}>
      <GlobalStyle />
      <CalculatorTemplate>
        <CalculatorScreen />
        <CalculatorKeypad />
      </CalculatorTemplate>
    </ThemeProvider>
  );
}

export default App;
