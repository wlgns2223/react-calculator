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
    <KeyWrapper isZero={isZero}>
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

const setZeroBtnWidth = (props) =>
  props.isZero &&
  css`
    width: 100%;
  `;

const KeyWrapper = styled.li`
  flex: 1 0 21%;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.85rem;
  padding: 2px;

  ${(props) =>
    props.isZero &&
    css`
      flex: 1 0 43%;
    `}

  @media ${({ theme }) => theme.mediaQueries.medium} {
    ${(props) =>
      props.isZero &&
      css`
        margin-left: 0.5rem;
      `}
  }

  @media ${({ theme }) => theme.mediaQueries.large} {
    ${(props) =>
      props.isZero &&
      css`
        margin-left: 0.75rem;
      `}
  }
`;

const Key = styled.button`
  background-color: #b2b1b9;
  border-radius: 50%;
  color: white;
  height: 4.5rem;
  width: 4.5rem;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 2.25rem;

  @media ${({ theme }) => theme.mediaQueries.medium} {
    height: 5rem;
    width: 5rem;
    font-size: 3rem;

    ${(props) =>
      props.isZero &&
      css`
        width: 100%;
      `}
  }

  @media ${({ theme }) => theme.mediaQueries.large} {
    height: 6.25rem;
    width: 6.25rem;

    ${(props) =>
      props.isZero &&
      css`
        width: 100%;
      `}
  }

  ${(props) =>
    props.isZero &&
    css`
      width: 100%;
      border-radius: 2rem;
    `}

  ${(props) => css`
    background-color: ${props.theme.pallete[props.color]};
  `}

  ${(props) =>
    props.active &&
    css`
      background-color: white;
      color: ${props.theme.pallete[props.color]};
    `}

  &:active {
    animation: ${btnAnimation} 300ms linear;
  }
  transition: all 300ms ease-in-out;
`;
