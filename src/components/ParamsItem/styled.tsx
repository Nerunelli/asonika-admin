import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme: { shadow } }) => css`
    width: 100%;
    height: 50px;
    border-radius: 10px;
    box-shadow: ${shadow.main};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
  `}
`;

export const Arrow = styled.div`
  width: 9px;
  outline: none;
  height: 16px;
  background-image: url('/static/icons/Arrow.svg');
  background-repeat: no-repeat;
  background-position: center;
`;

export const Title = styled.div`
  user-select: none;
  margin-left: 10px;
  color: #707070;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
`;
