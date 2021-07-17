import React, { useContext, useReducer, createContext } from "react";
import {
  binaryHandler,
  calculateHanlder,
  keyHandler,
  unaryHanlder,
} from "./handler";

export const initialState = {
  rvalue: null,
  lvalue: null,
  operator: "",
  current: 0,
  keyInput: false,
};

function calculatorReducer(state, action) {
  switch (action.type) {
    case "key":
      return keyHandler(state, action);
    case "unary":
      return unaryHanlder(state, action);
    case "binary":
      return binaryHandler(state, action);
    case "calculate":
      return calculateHanlder(state, action);
    default:
      throw new Error(`Unhandled Type Error ${action.type}`);
  }
}

const CalculatorStateContext = createContext();
const CalculatorDispatchContext = createContext();

export function CalculatorContext({ children }) {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);
  return (
    <CalculatorStateContext.Provider value={state}>
      <CalculatorDispatchContext.Provider value={dispatch}>
        {children}
      </CalculatorDispatchContext.Provider>
    </CalculatorStateContext.Provider>
  );
}

export function useStateContext() {
  const context = useContext(CalculatorStateContext);
  if (typeof context !== "number" && !context) {
    throw new Error(`State Context Undefined ${context}`);
  }
  return context;
}

export function useDispatchContext() {
  const context = useContext(CalculatorDispatchContext);
  if (!context) {
    throw new Error(`Dispatch Context Undefined ${context}`);
  }

  return context;
}
