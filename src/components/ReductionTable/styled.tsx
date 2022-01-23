import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const HeaderContainer = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    width: 100%;
    border-radius: 10px 10px 0 0;
    border: 1px solid ${colors.greyDarkAlpha};
    //padding: 20px;
    height: 100%;
  `}
`;

export const Header = styled.div`
  display: flex;
  min-width: 33%;
  height: 38px;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 16px;
`;

export const Input = styled.input`
  ${({ theme: { colors } }) => css`
    border-radius: 0;
    height: 38px;
    border: 1px solid ${colors.greyDarkAlpha};
    min-width: calc(100% / 3);
    padding: 0 10px;
    color: ${colors.greyDark};

    &:focus {
      outline: none;
      background-color: ${colors.lightGreenAlpha};
      border: 1px solid ${colors.lightGreen};
    }
  `}
`;
