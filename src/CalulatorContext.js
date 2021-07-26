import React, { useContext, useReducer, createContext } from "react";
import {
  binaryHandler,
  calculateHanlder,
  keyHandler,
  unaryHanlder,
} from "./handler";

export const initialHeaderState = {
  rvalue: null,
  lvalue: null,
  operator: "",
  current: 0,
  keyInput: false,
};

function headerReducer(state, action) {
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
  const [state, dispatch] = useReducer(headerReducer, initialHeaderState);
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
  if (!context) {
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
