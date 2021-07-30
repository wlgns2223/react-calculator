import React, { useState, useCallback } from "react";
import styled from "styled-components";
import CalculatorKeyItem from "../components/CalulatorKeyItem";
import initialKeyState from "../InitialKeyState";
import { useDispatch } from "react-redux";

export default function CalculatorKeypad() {
  const [keys, setKeys] = useState(initialKeyState);
  const dispatch = useDispatch();
  const onToggle = useCallback((id) => {
    const deletePrevState = keys.map((key) =>
      key.active ? { ...key, active: false } : key
    );
    const newState = deletePrevState.map((key) =>
      key.id === id ? { ...key, active: !key.active } : key
    );
    setKeys(() => newState);
  }, []);

  return (
    <CalculatorKeypadBlock>
      <KeyList>
        {keys.map((akey) => (
          <CalculatorKeyItem
            key={akey.id}
            akey={akey}
            dispatch={dispatch}
            onToggle={onToggle}
          />
        ))}
      </KeyList>
    </CalculatorKeypadBlock>
  );
}

const CalculatorKeypadBlock = styled.div`
  padding-top: 2rem;
  width: 100%;
`;

const KeyList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
