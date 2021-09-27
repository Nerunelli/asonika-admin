import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({theme: {shadow}}) => css`  
    height: 50px;
    padding: 0 50px;
    box-shadow: ${shadow.main} 0px 4px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`;

export const Side = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  ${({theme: {colors}}) => css`  
    font-size: 16px;
    font-weight: bold;
    color: ${colors.text};
    margin-left: 20px;
  `}
`;

export const Hello = styled.div`
  ${({theme: {colors}}) => css`
    color: ${colors.text};
    font-size: 16px;
  `}
`;

export const Username = styled.div`
  ${({theme: {colors}}) => css`
    font-size: 16px;
    font-weight: bold;
    color: ${colors.greenText};
    margin-right: 20px;
  `}
`;