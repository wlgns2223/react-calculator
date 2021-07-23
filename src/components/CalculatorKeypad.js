import React, { useState } from "react";
import styled from "styled-components";
import CalculatorKeyItem from "./CalulatorKeyItem";
import initialKeyState from "../InitialKeyState";

const CalculatorKeypadBlock = styled.div`
  padding: 32px 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default function CalculatorKeypad() {
  const [keys, setKeys] = useState(initialKeyState);
  const onToggle = (clickedId) => {
    setKeys(
      keys.map((key) =>
        key.id === clickedId
          ? { ...key, active: !key.active }
          : { ...key, active: false }
      )
    );
  };
  return (
    <CalculatorKeypadBlock>
      {keys.map((akey) => (
        <CalculatorKeyItem
          key={akey.id}
          keys={keys}
          akey={akey}
          onToggle={onToggle}
        />
      ))}
    </CalculatorKeypadBlock>
  );
}
