import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 1px solid ${colors.lightGreen};
    background-color: #fff;
    height: 38px;
    //padding: 0 10px;
    font-size: 14px;
    font-weight: bold;
    color: ${colors.darkGreen};
    width: 160px;
    cursor: pointer;
    border-radius: 10px;
  `}
`;

export const FileIcon = styled.div`
  width: 16px;
  outline: none;
  height: 20px;
  background-image: url('/static/icons/FilePlus.svg');
  background-repeat: no-repeat;
  background-position: center;
`;

export const Input = styled.input`
  display: none;
`;

export const FileName = styled.div`
  ${({ theme: { colors } }) => css`
    color: ${colors.darkGreen};
    margin: 10px;
  `}
`;
