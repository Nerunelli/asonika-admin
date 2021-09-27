import styled, { css } from "styled-components";

export const Wrapper = styled.button`
  background-color: #fff;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 40px;
`;

export const Lines = styled.div`
  ${({theme: {colors}}) => css`
    position: relative;
    width: 26px;
    height: 3px;
    background-color: ${colors.text};
    border-radius: 4px;
    
    &::before, &::after {
      display: block;
      position: absolute;
      content: '';
      border-radius: 4px;
      width: 26px;
      height: 3px;
      background-color: ${colors.text};
    };

    &::before {
      top: -7px;
    };

    &::after {
      bottom: -7px;
    };
  `}
`;