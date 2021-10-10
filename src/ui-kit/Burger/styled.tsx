import styled, { css } from 'styled-components';

export const Wrapper = styled.button`
  background-color: #fff;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 40px;
`;

export const Lines = styled.div<{ isOpened: boolean }>`
  ${({ theme: { colors }, isOpened }) => css`
    position: relative;
    transition: 0.5s;
    width: 24px;

    & div {
      margin: 4px 0;
    }

    &::before,
    &::after,
    & div {
      width: 100%;
      background: ${colors.greyDark};
      content: '';
      display: block;
      height: 2px;
      border-radius: 3px;
      transition: 0.5s;
    }

    ${isOpened
      ? css`
          &::before {
            transform: translateY(6px) rotate(135deg);
          }
          &::after {
            transform: translateY(-6px) rotate(-135deg);
          }
          & div {
            transform: scale(0);
          }
        `
      : ''}
  `}
`;
