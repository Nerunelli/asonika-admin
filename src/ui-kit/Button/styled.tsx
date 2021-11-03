import styled, { css } from 'styled-components';

interface IBtn {
  width?: string;
  height?: string;
  variant?: string;
}

export const Btn = styled.button<IBtn>`
  ${({ width, height, variant, theme }) => css`
    min-width: ${width};
    width: ${width};
    min-height: ${height};
    height: ${height};
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${variant === 'normal'
      ? theme.colors.lightGreen
      : variant === 'danger'
      ? theme.colors.red
      : theme.color.text};
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    user-select: none;
    &:last-child {
      margin-bottom: 0;
    }
  `}
`;
