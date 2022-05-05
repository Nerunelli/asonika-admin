import styled, { css } from 'styled-components';

export const Wrapper = styled.button`
  ${({ theme: { colors, shadow } }) => css`
    font-size: 14px;
    font-weight: bold;
    color: ${colors.greyDark};
    padding: 10px 15px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    margin-bottom: 20px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    width: 100%;
    box-shadow: ${shadow.main};

    &:last-child {
      margin-bottom: 0;
    }
  `}
`;

export const ArrowImg = styled.div<{ open?: boolean }>`
  ${({ open }) => css`
    width: 9px;
    outline: none;
    height: 16px;
    background-image: url('/static/icons/Arrow.svg');
    background-repeat: no-repeat;
    background-position: center;
    transform: ${open ? `rotate(90deg)` : `rotate(0deg)`};
  `}
`;
