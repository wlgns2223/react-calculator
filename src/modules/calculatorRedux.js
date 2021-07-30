import * as handlers from "./reduxHandlers";

export const KEY_INPUT = "calculator/KEY_INPUT";
export const UNARY_INPUT = "calculator/UNARY_INPUT";
export const BINARY_INPUT = "calculator/BINARY_INPUT";
export const CALCULATE_INPUT = "calculator/CALCULATE_INPUT";

export const initialState = {
  rvalue: null,
  lvalue: null,
  operator: "",
  current: "0",
  keyInput: false,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case KEY_INPUT:
      return handlers.keyHandler(state, action);
    case UNARY_INPUT:
      return handlers.unaryHanlder(state, action);
    case BINARY_INPUT:
      return handlers.binaryHandler(state, action);
    case CALCULATE_INPUT:
      return handlers.calculateHanlder(state, action);
    default:
      return { ...state };
  }
}
