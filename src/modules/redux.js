export const KEY_INPUT = "calculator/KEY_INPUT";
export const UNARY_INPUT = "calculator/UNARY_INPUT";
export const BINARY_INPUT = "calculator/BINARY_INPUT";
export const CALCULATE_INPUT = "calculator/CALCULATE_INPUT";

export const getKeyInputAction = () => ({
  type: KEY_INPUT,
});
export const getUnaryInputAction = () => ({
  type: UNARY_INPUT,
});
export const getBinaryInputAction = () => ({
  type: BINARY_INPUT,
});
export const getCalculateInputAction = () => ({
  type: CALCULATE_INPUT,
});

export const initialHeaderState = {
  rvalue: null,
  lvalue: null,
  operator: "",
  current: 0,
  keyInput: false,
};
