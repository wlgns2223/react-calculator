import React from "react";
import styled from "styled-components";
import CalculatorKeyItem from "./CalulatorKeyItem";

const CalculatorKeypadBlock = styled.div`
  padding: 32px 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default function CalculatorKeypad() {
  return (
    <CalculatorKeypadBlock>
      <CalculatorKeyItem text="AC" color="darkGray" type="unary" />
      <CalculatorKeyItem text="+/-" color="darkGray" type="unary" />
      <CalculatorKeyItem text="%" color="darkGray" type="unary" />
      <CalculatorKeyItem text="/" color="gold" type="binary" />
      <CalculatorKeyItem text="7" type="key" />
      <CalculatorKeyItem text="8" type="key" />
      <CalculatorKeyItem text="9" type="key" />
      <CalculatorKeyItem text="X" color="gold" type="binary" />
      <CalculatorKeyItem text="4" type="key" />
      <CalculatorKeyItem text="5" type="key" />
      <CalculatorKeyItem text="6" type="key" />
      <CalculatorKeyItem text="-" color="gold" type="binary" />
      <CalculatorKeyItem text="1" type="key" />
      <CalculatorKeyItem text="2" type="key" />
      <CalculatorKeyItem text="3" type="key" />
      <CalculatorKeyItem text="+" color="gold" type="binary" />
      <CalculatorKeyItem text="0" isZero type="key" />
      <CalculatorKeyItem text="." type="key" />
      <CalculatorKeyItem text="=" color="gold" type="calculate" />
    </CalculatorKeypadBlock>
  );
}
