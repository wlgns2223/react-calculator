import { initialHeaderState } from "../../CalulatorContext";
import { _getfloatingPoint, unaryHanlder } from "../../handler";

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
