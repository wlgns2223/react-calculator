export function keyHandler(state, action) {
  const { keyInput, current } = state;
  if (!keyInput)
    return {
      ...state,
      keyInput: true,
      current: action.text,
    };
  const value = current * 10 + action.text;
  return {
    ...state,
    current: value,
  };
}

export function unaryHanlder(state, action) {
  const { current } = state;
  switch (action.text) {
    case "AC":
      return {
        rvalue: null,
        lvalue: null,
        operator: "",
        current: 0,
        keyInput: false,
      };
    case "+/-":
      return {
        ...state,
        current: -current,
      };
    case "%":
      return {
        ...state,
        current: current / 100,
      };
    default:
      return {
        ...state,
      };
  }
}

function caclulate(state) {
  const { lvalue, rvalue } = state;

  const { operator } = state;
  switch (operator) {
    case "/":
      if (rvalue === 0) {
        alert("오류: 0으로 나누기. 연산을 초기화 합니다.");
        return {
          rvalue: null,
          lvalue: null,
          operator: "",
          current: 0,
          keyInput: false,
        };
      }
      return lvalue / rvalue;
    case "X":
      return lvalue * rvalue;
    case "-":
    case "+":
      return lvalue + rvalue;
    default:
      throw new Error(`Unhandled Operator: ${operator}`);
  }
}

function setTemporalState(state) {
  return {
    ...state,
    lvalue: state.lvalue === null ? state.rvalue : state.lvalue,
    rvalue: state.operator === "-" ? -state.current : state.current,
  };
}

export function binaryHandler(state, action) {
  try {
    if (state.keyInput) {
      if (state.rvalue === null && state.lvalue === null) {
        return {
          ...state,
          lvalue: null,
          rvalue: state.current,
          operator: action.text,
          keyInput: false,
        };
      }

      state = setTemporalState(state);
      const value = caclulate(state, action);
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

export function calculateHanlder(state) {
  if (state.keyInput || state.lvalue === null) {
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
