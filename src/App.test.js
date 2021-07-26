import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import CalculatorHeader from "./components/CalculatorHeader";
import { CalculatorContext } from "./CalulatorContext";
import { useContext } from "react";

jest.mock("react");

test("<header />", () => {
  useContext.mockImplementation(() => {
    return {
      rvalue: null,
      lvalue: null,
      operator: "",
      current: 0,
      keyInput: false,
    };
  });
  const { getByText } = render(
    // <CalculatorContext>
    <CalculatorHeader />
    // </CalculatorContext>
  );

  const elem = getByText("0");
  expect(elem).toBeInTheDocument();
});
