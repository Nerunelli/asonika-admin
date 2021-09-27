import styled, { css } from "styled-components";


export const Button = styled.button`
  ${({theme: {colors}}) => css`
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    background-color: ${colors.lightGreen};
    padding: 18px 150px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  `}
`;