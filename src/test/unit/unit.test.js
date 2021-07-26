import { initialHeaderState } from "../../CalulatorContext";
import {
  _getfloatingPoint,
  unaryHanlder,
  _isRvalueAndLvalueNull,
  _isNumberKeyPressed,
  _isKeyPressedFirstAndThenBinaryKeyPressed,
  binaryHandler,
} from "../../handler";
import * as reduxModule from "../../modules/redux";

describe("key keyHandler test", () => {
  it("isKeyInputFalse함수는 false가 들어오면 true를 반환해야한다.", () => {
    const isKeyInputFalse = jest
      .fn()
      .mockImplementation((key) => key === false);
    expect(isKeyInputFalse(false)).toBeTruthy();
  });

  it("keyhandler함수는 초기상태를 받아 key가 입력중인 상태를 반환해야한다.", () => {
    const action = { text: "1" };
    const expectedValue = {
      ...initialHeaderState,
      keyInput: true,
      current: action.text,
    };

    expect(keyHandler(initialHeaderState, action)).toStrictEqual(expectedValue);
  });

  it("키가 입력되기 시작하면 입력은 기존값과 새 값이 더해져야한다", () => {
    const addCurrentAndClickedKey = jest.fn(
      ({ current }, { text }) => current + text
    );

    const action = { text: "1" };
    const secondState = {
      ...initialHeaderState,
      keyInput: true,
      current: action.text,
    };

    const expectedState = {
      ...secondState,
      current: addCurrentAndClickedKey(secondState, action),
    };

    expect(keyHandler(secondState, action)).toStrictEqual(expectedState);
  });
});

describe("UnaryHandler test", () => {
  const secondState = {
    ...initialHeaderState,
    keyInput: true,
    current: "11",
  };
  it("unary 핸들러는 AC를 넣으면 초기상태를 반환해야한다.", () => {
    const action = { text: "AC" };
    expect(unaryHanlder(secondState, action)).toStrictEqual(initialHeaderState);
  });

  it("action이 +/-이면 부호를 바꾸어야한다. ", () => {
    const action = { text: "+/-" };
    expect(unaryHanlder(secondState, action)).toStrictEqual({
      ...secondState,
      current: -secondState.current,
    });
  });

  it("action이 %면 백분율을 반환해야한다.", () => {
    const action = { text: "%" };
    expect(unaryHanlder(secondState, action)).toStrictEqual({
      ...secondState,
      current: secondState.current / 100,
    });
  });

  it("이외의 액션이 입력되면 원래 상태를 반환한다.", () => {
    const action = { text: "unknown" };
    expect(unaryHanlder(secondState, action)).toStrictEqual(secondState);
  });
});

describe("binary handler test", () => {
  it("Rvalue and lvalue가 null이면 true를 반환해야한다.", () => {
    const temp = {
      ...initialHeaderState,
      keyInput: true,
    };
    expect(_isRvalueAndLvalueNull(temp)).toBeTruthy();
    expect(_isNumberKeyPressed(temp)).toBeTruthy();
  });

  it("binaryHandler는 처음 숫자가 눌러지고 연산자가 눌러지는 경우", () => {
    const state = {
      ...initialHeaderState,
      keyInput: true,
    };
    const action = {
      text: "+",
    };

    expect(binaryHandler(state, action)).toStrictEqual({
      ...state,
      lvalue: null,
      rvalue: state.current,
      operator: action.text,
      keyInput: false,
    });
  });
});

describe("calculate module", () => {
  it("getLvalueFloatingPoint", () => {
    expect(typeof getLvalueFloatingPoint).toBe("function");
  });

  it("should be called with lvalue", () => {
    const lvalue = "1.22";
    expect(_getfloatingPoint(lvalue)).toBe(2);
    expect(_getfloatingPoint(null)).toBe(-1);
  });
});

describe("redux module unit test", () => {
  it("액션생성 함수는 알맞는 타입에 알맞는 액션을 넣어 반환해야한다.", () => {
    expect(reduxModule.getKeyInputAction()).toStrictEqual({
      type: reduxModule.KEY_INPUT,
    });
    expect(reduxModule.getUnaryInputAction()).toStrictEqual({
      type: reduxModule.UNARY_INPUT,
    });
    expect(reduxModule.getBinaryInputAction()).toStrictEqual({
      type: reduxModule.BINARY_INPUT,
    });
    expect(reduxModule.getCalculateInputAction()).toStrictEqual({
      type: reduxModule.CALCULATE_INPUT,
    });
  });
});

describe("reducer", () => {
  it("should return initial state", () => {
    expect(reduxModule.reducer(reduxModule.initialState, {})).toStrictEqual(
      reduxModule.initialState
    );
  });

  it("key input action", () => {
    const action = { text: "1", type: reduxModule.KEY_INPUT };
    expect(reduxModule.reducer(reduxModule.initialState, action)).toStrictEqual(
      {
        ...reduxModule.initialState,
        keyInput: true,
        current: action.text,
      }
    );
    const nextState = {
      ...reduxModule.initialState,
      keyInput: true,
      current: "1",
    };

    expect(reduxModule.reducer(nextState, action)).toStrictEqual({
      ...nextState,
      current: "11",
    });
  });

  it("unary AC input test", () => {
    const action = { text: "AC", type: reduxModule.UNARY_INPUT };
    const tempState = {
      ...reduxModule.initialState,
      current: "11",
    };
    expect(reduxModule.reducer(tempState, action)).toStrictEqual(
      reduxModule.initialState
    );
  });

  it("unary +/- input test", () => {
    const action = { text: "+/-", type: reduxModule.UNARY_INPUT };
    const tempState = {
      ...reduxModule.initialState,
      current: "1",
    };
    expect(reduxModule.reducer(tempState, action)).toStrictEqual({
      ...tempState,
      current: "-1",
    });
  });

  it("unary % test", () => {
    const action = { text: "%", type: reduxModule.UNARY_INPUT };
    const tempState = {
      ...reduxModule.initialState,
      current: "1",
    };

    expect(reduxModule.reducer(tempState, action)).toStrictEqual({
      ...tempState,
      current: "0.01",
    });
  });

  it("unary default handle", () => {
    const action = { text: "!", type: reduxModule.UNARY_INPUT };
    const tempState = {
      ...reduxModule.initialState,
      current: "1",
    };
    expect(reduxModule.reducer(tempState, action)).toStrictEqual(tempState);
  });
});

describe("Binary Handler test", () => {
  it("key first input", () => {
    const action = { text: "+", type: reduxModule.BINARY_INPUT };
    const tempState = {
      ...reduxModule.initialState,
      keyInput: true,
      current: "1",
    };
    expect(reduxModule.reducer(tempState, action)).toStrictEqual({
      ...tempState,
      lvalue: null,
      rvalue: tempState.current,
      operator: action.text,
      keyInput: false,
    });
  });

  it("2+2 + ", () => {
    const operatorAction = { text: "+", type: reduxModule.BINARY_INPUT };
    const numberAction = { text: "2", type: reduxModule.KEY_INPUT };

    let tempState = reduxModule.reducer(reduxModule.initialState, numberAction);
    tempState = reduxModule.reducer(tempState, operatorAction);
    tempState = reduxModule.reducer(tempState, numberAction);
    expect(reduxModule.reducer(tempState, operatorAction)).toStrictEqual({
      lvalue: "4",
      rvalue: "2",
      operator: operatorAction.text,
      current: "4",
      keyInput: false,
    });
    tempState = reduxModule.reducer(tempState, operatorAction);
    operatorAction["text"] = "-";
    expect(reduxModule.reducer(tempState, operatorAction)).toStrictEqual({
      ...tempState,
      operator: operatorAction.text,
    });
  });
});
