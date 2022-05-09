import styled, { css } from 'styled-components';

interface IBtn {
  width?: string;
  height?: string;
  variant?: string;
}

export const Btn = styled.button<IBtn>`
  ${({ width, height, variant, disabled, theme }) => css`
    min-width: ${width};
    width: ${width};
    min-height: ${height};
    height: ${height};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${disabled
      ? variant === 'normal'
        ? theme.colors.disabledGreen
        : variant === 'danger'
        ? theme.colors.disabledRed
        : theme.colors.greyLightAlpha
      : variant === 'normal'
      ? theme.colors.lightGreen
      : variant === 'danger'
      ? theme.colors.red
      : '#fff'};
    font-size: ${variant === 'transparent' ? '20px' : '14px'};
    font-weight: bold;
    color: ${variant === 'transparent' ? theme.colors.greyDark : '#fff'};
    border-radius: 10px;
    border: ${variant === 'transparent' ? `1px solid ${theme.colors.greyDarkAlpha}` : 'none'};
    cursor: ${disabled ? 'default' : 'pointer'};
    user-select: none;
    &:last-child {
      margin-bottom: 0;
    }
    &:active {
      background: ${disabled
        ? theme.colors.greyLightAlpha
        : variant === 'normal'
        ? theme.colors.darkGreen
        : variant === 'danger'
        ? theme.colors.darkRed
        : theme.colors.lightGreenAlpha};
    }
  `}
`;
