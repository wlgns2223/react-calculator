import CalculatorTemplate from "./components/CalculatorTemplate";
import CalculatorKeypad from "./containers/CalculatorKeypad";
import CalculatorScreen from "./containers/CalulatorScreen";
import { GlobalStyle } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import themes from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={themes}>
      <GlobalStyle />
      <CalculatorTemplate>
        <CalculatorScreen />
        <CalculatorKeypad />
      </CalculatorTemplate>
    </ThemeProvider>
  );
}

export default App;
