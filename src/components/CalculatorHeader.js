import React from "react";
import styled from "styled-components";

export default function CalculatorHeader({ current }) {
  return (
    <CalculatorHeaderBlock>
      <CalulatorScreen>{current}</CalulatorScreen>
    </CalculatorHeaderBlock>
  );
}

const CalculatorHeaderBlock = styled.div`
  padding: 1rem 0.85rem;
  border-bottom: 1px solid #ffd523;
  width: 100%;
`;

const CalulatorScreen = styled.div`
  background-color: white;
  border: 1px solid white;
  border-radius: 4px;
  width: 100%;
  height: 4rem;
  line-height: 4rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 3rem;
  overflow-x: scroll;

  @media ${({ theme }) => theme.mediaQueries.medium} {
    height: 5rem;
    font-size: 4rem;
    line-height: 5rem;
  }

  @media ${({ theme }) => theme.mediaQueries.large} {
    height: 6rem;
    line-height: 6rem;
    font-size: 5rem;
  }
`;
