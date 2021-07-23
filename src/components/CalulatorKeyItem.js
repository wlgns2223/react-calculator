import React from "react";
import styled, { css, keyframes } from "styled-components";
import { useDispatchContext } from "../CalculatorContext";

const colorStyles = {
  darkGray: "#595260",
  gold: "#ffd523",
  gray: "#b2b1b9",
};

const btnAnimation = keyframes`
0% {
  transform: scale(1);
} 

50% {
  transform: scale(0.85);
}

100%{
  transform: scale(1);
}
`;

const Key = styled.button`
  background-color: #b2b1b9;
  border-radius: 50%;
  color: white;
  height: 105px;
  width: 105px;
  outline: none;
  border: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3.75rem;

  margin-bottom: 10px;

  ${(props) =>
    props.isZero &&
    css`
      width: 242px;
      border-radius: 32px;
    `}

  ${(props) => {
    const selectedColor = colorStyles[props.color];

    return css`
      background-color: ${selectedColor};
    `;
  }}

  &:active {
    background-color: white;
    animation: ${btnAnimation} 300ms linear;
    ${({ color }) =>
      css`
        color: ${colorStyles[color]};
      `}
  }
  transition: all 300ms ease-in-out;
`;

export default function CalculatorKeyItem({ text, isZero, color, type }) {
  const dispatch = useDispatchContext();
  const onClick = () => {
    dispatch({ type, text });
  };

  return (
    <Key isZero={isZero} color={color} onClick={onClick}>
      {text}
    </Key>
  );
}

CalculatorKeyItem.defaultProps = {
  color: "gray",
};
