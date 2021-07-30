import React, { useCallback } from "react";
import styled, { css, keyframes } from "styled-components";

function CalculatorKeyItem({ akey, dispatch, onToggle }) {
  const { id, color, type, text, active } = akey;
  console.log("RERENDERING" + id);
  const isZero = text === "0" ? true : false;
  const onClick = useCallback(() => {
    dispatch({ type, text });
    onToggle(id);
  }, [type, text, dispatch, id, onToggle]);

  return (
    <Key isZero={isZero} color={color} onClick={onClick} active={active}>
      {text}
    </Key>
  );
}
export default React.memo(CalculatorKeyItem);

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

  ${(props) => css`
    background-color: ${props.theme[props.color]};
  `}

  ${(props) =>
    props.active &&
    css`
      background-color: white;
      color: ${props.theme[props.color]};
    `}

  &:active {
    animation: ${btnAnimation} 300ms linear;
  }
  transition: all 300ms ease-in-out;
`;
