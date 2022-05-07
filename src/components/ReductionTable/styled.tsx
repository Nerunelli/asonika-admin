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
  //position: relative;
`;

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const Row = styled.div`
  //width: 100%;
  position: relative;
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

export const DeleteBtn = styled.button`
  ${({ theme: { colors } }) => css`
    //display: flex;
    cursor: pointer;
    position: absolute;
    //align-items: center;
    //justify-content: center;
    width: 30px;
    height: 30px;
    background-color: #fff;
    border-radius: 50%;
    border: none;
    margin-left: -15px;
    margin-top: 2px;
    font-size: 26px;
    color: #fff;
    visibility: hidden;
    transition-property: color, border;
    transition-duration: 0.1s;
    transition-timing-function: linear;
    ${Row}:hover & {
      visibility: visible;
      color: ${colors.red};
      border: 1px solid ${colors.greyDarkAlpha};
    }
  `}
`;
