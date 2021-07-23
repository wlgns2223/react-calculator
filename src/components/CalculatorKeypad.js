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
  console.log(keys);
  return (
    <CalculatorKeypadBlock>
      {keys.map((key) => (
        <CalculatorKeyItem
          key={key.id}
          text={key.text}
          color={key.color}
          type={key.type}
        />
      ))}
    </CalculatorKeypadBlock>
  );
}
