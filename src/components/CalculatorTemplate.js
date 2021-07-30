import React from "react";
import styled from "styled-components";

export default function CalculatorTemplate({ children }) {
  return <CalculatorTemplateBlock>{children}</CalculatorTemplateBlock>;
}

const CalculatorTemplateBlock = styled.div`
  /* width: 512px; */
  width: 80%;
  min-width: 320px;
  height: 100%;
  border-radius: 1rem;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  margin: 3rem 1rem;
  padding: 1rem;

  background-color: #2c2e43;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 480px) {
  }
`;
