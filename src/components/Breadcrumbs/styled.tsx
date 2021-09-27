import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({theme: {colors}}) => css`
    display: flex;
    align-items: center;
    margin: 20px 50px;
    height: 20px;
    font-size: 12px;
  `}
`;

export const CrumbItem = styled.div`
  ${({theme: {colors}}) => css`
    margin-right: 8px;
    margin-left: 8px;
    &::after {

    }
    &:last-child {
      font-weight: bold;
      color: ${colors.greenText};
      margin-right: 0;
    }
    &:first-child {
      margin-left: 0;
    }
  `}
`;

export const CrumbImg = styled.div`
  width: 4px;
  outline: none;
  height: 8px;
  background: url('static/images/Arrow.svg');
  background-repeat: no-repeat;
  background-position: center;
`;