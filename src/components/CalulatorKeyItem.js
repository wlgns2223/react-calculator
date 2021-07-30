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
    <KeyWrapper>
      <Key isZero={isZero} color={color} onClick={onClick} active={active}>
        {text}
      </Key>
    </KeyWrapper>
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

const KeyWrapper = styled.li`
  flex: 1 0 21%;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.85rem;
  padding: 2px;
`;

const Key = styled.button`
  background-color: #b2b1b9;
  border-radius: 50%;
  color: white;
  height: 4.75rem;
  width: 4.75rem;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 2.25rem;

  ${(props) =>
    props.isZero &&
    css`
      width: 9.5rem;
      border-radius: 2rem;
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
