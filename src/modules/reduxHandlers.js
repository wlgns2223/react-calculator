import { initialState } from "./calculatorRedux";

export function keyHandler(state, action) {
  if (isKeyInputFalse(state))
    return {
      ...state,
      keyInput: true,
      current: action.text,
    };
  return {
    ...state,
    current: addCurrentAndClickedKey(state, action),
  };
}

function isKeyInputFalse({ keyInput }) {
  return keyInput === false;
}

function addCurrentAndClickedKey({ current }, { text }) {
  return current + text;
}

export function unaryHanlder(state, action) {
  switch (action.text) {
    case "AC":
      return {
        ...initialState,
      };
    case "+/-":
      return {
        ...state,
        current: -state.current + "",
      };
    case "%":
      return {
        ...state,
        current: state.current / 100 + "",
      };
    default:
      return {
        ...state,
      };
  }
}

function getFloatingPointFrom(lvalue, rvalue) {
  console.log(`lvalue: ${lvalue} \t rvalue: ${rvalue}`);
  const lvalueFloatingPoint = _getfloatingPoint(lvalue);
  const rvalueFloatingPoint = _getfloatingPoint(rvalue);

  return Math.max(lvalueFloatingPoint, rvalueFloatingPoint);
}

export function _getfloatingPoint(value) {
  return value !== null ? value.slice(value.indexOf(".")).length - 1 : -1;
}

function isZero(rvalue) {
  return rvalue === 0;
}

function caclulate(state) {
  const { lvalue, rvalue, operator } = state;
  const floatingPoint = getFloatingPointFrom(lvalue, rvalue);
  const l = parseFloat(lvalue, 10);
  const r = parseFloat(rvalue, 10);

  switch (operator) {
    case "/":
      if (isZero(rvalue)) {
        alert("오류: 0으로 나누기. 연산을 초기화 합니다.");
        return {
          rvalue: null,
          lvalue: null,
          operator: "",
          current: 0,
          keyInput: false,
        };
      }
      return parseFloat(l / r).toFixed(floatingPoint) + "";
    case "X":
      return parseFloat(l * r).toFixed(floatingPoint) + "";
    case "-":
    case "+":
      return parseFloat(l + r).toFixed(floatingPoint) + "";
    default:
      return "0";
  }
}

function setTemporalState(state) {
  return {
    ...state,
    lvalue: state.lvalue === null ? state.rvalue : state.lvalue,
    rvalue: state.operator === "-" ? "-" + state.current : state.current,
  };
}

function isRvalueAndLvalueNull({ rvalue, lvalue }) {
  return rvalue === null && lvalue === null;
}

export function _isNumberKeyPressed({ keyInput }) {
  return keyInput === true;
}

export function binaryHandler(state, action) {
  try {
    if (_isNumberKeyPressed(state)) {
      if (isRvalueAndLvalueNull(state)) {
        return {
          ...state,
          lvalue: null,
          rvalue: state.current,
          operator: action.text,
          keyInput: false,
        };
      }

      state = setTemporalState(state);
      const value = caclulate(state);
      return {
        lvalue: value,
        rvalue: state.rvalue,
        operator: action.text,
        current: value,
        keyInput: false,
      };
    }
  } catch (e) {
    throw new Error(e);
  }

  return { ...state, operator: action.text };
}

function _isKeyInputTrueOrLvalueNull({ keyInput, lvalue }) {
  return keyInput || lvalue === null;
}
export function calculateHanlder(state) {
  if (_isKeyInputTrueOrLvalueNull(state)) {
    state = setTemporalState(state);
  }

  const value = caclulate(state);
  return {
    ...state,
    lvalue: value,
    current: value,
    keyInput: false,
  };
}
