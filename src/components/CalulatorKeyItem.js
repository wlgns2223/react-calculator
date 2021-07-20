import React from "react";
import styled, { css } from "styled-components";
import { useDispatchContext } from "../CalculatorContext";

const colorStyles = {
  darkGray: "#595260",
  gold: "#ffd523",
  gray: "#b2b1b9",
};

const Key = styled.div`
  background-color: #b2b1b9;
  border-radius: 50%;
  color: white;
  height: 105px;
  width: 105px;

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

  &:focus {
    background-color: white;
    outline: none;
    border: none;
    ${({ color }) =>
      css`
        color: ${colorStyles[color]};
      `}
  }
`;

export default function CalculatorKeyItem({ text, isZero, color, type }) {
  const dispatch = useDispatchContext();
  const onClick = () => {
    dispatch({ type, text });
  };

  return (
    <Key tabIndex="0" isZero={isZero} color={color} onClick={onClick}>
      {text}
    </Key>
  );
}

CalculatorKeyItem.defaultProps = {
  color: "gray",
};
