import React from "react";
import styled from "styled-components";
import { useStateContext } from "../CalulatorContext";

const CalculatorHeaderBlock = styled.div`
  padding: 24px 20px;
  border-bottom: 1px solid #ffd523;
  width: 100%;
`;

const CalulatorScreen = styled.div`
  background-color: white;
  border: 1px solid white;
  border-radius: 4px;
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 2.25rem;
  overflow-x: scroll;
`;

export default function CalculatorHeader() {
  const { current } = useStateContext();

  return (
    <CalculatorHeaderBlock>
      <CalulatorScreen>{current}</CalulatorScreen>
    </CalculatorHeaderBlock>
  );
}
