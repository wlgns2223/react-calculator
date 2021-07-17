import React from "react";
import styled from "styled-components";

const CalculatorTemplateBlock = styled.div`
  width: 512px;
  height: 728px;
  border-radius: 16px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  margin: 0 auto;
  margin-top: 3rem;
  padding: 16px;
  background-color: #2c2e43;

  display: flex;
  flex-direction: column;
  align-items: center;
  flex-direction: column;
`;

export default function CalculatorTemplate({ children }) {
  return <CalculatorTemplateBlock>{children}</CalculatorTemplateBlock>;
}
