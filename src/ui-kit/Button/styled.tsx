import styled, { css } from 'styled-components';

interface IBtn {
  width?: string;
  height?: string;
  normal?: boolean;
  danger?: boolean;
}

export const Btn = styled.button<IBtn>`
  ${({ width, height, normal, danger, theme }) => css`
    min-width: ${width};
    width: ${width};
    min-height: ${height};
    height: ${height};
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${normal ? theme.colors.lightGreen : danger ? theme.colors.red : theme.color.text};
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    user-select: none;

    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  `}
`;
