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
    margin-top: -1px;

    &:focus {
      outline: none;
      background-color: ${colors.lightGreenAlpha};
      border: 1px solid ${colors.lightGreen};
    }
  `}
`;

export const InputWrapper = styled.div`
  width: 100%;
`;

export const Plus = styled.div`
  width: 18px;
  outline: none;
  height: 17px;
  background-image: url('/static/icons/Plus.svg');
  background-repeat: no-repeat;
  background-position: center;
`;

export const AddButton = styled.button`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 38px;
    background-color: #fff;
    border-radius: 0 0 10px 10px;
    border: 1px solid ${colors.greyDarkAlpha};
    margin-top: -1px;
  `}
`;
