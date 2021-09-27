import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  height: 38px;
`;

export const Input = styled.input`
  ${({ theme: { colors } }) => css`
    border: ${colors.border} 1px solid;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    border-radius: 10px;
    height: 38px;
    width: 370px;
    padding-left: 10px;
    padding-right: 40px;

    &::placeholder {
      font-size: 14px;
      color: ${colors.border};
    }

    &:focus {
      border: ${colors.lightGreen} 2px solid;
      outline: none;
    }
  `}
`;

export const SearchIcon = styled.div`
  /* position: absolute; */
  width: 20px;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 6px;
  margin-left: -36px;
  background: url('static/images/Search.svg') no-repeat center;
  background-size: 20px;
  cursor: pointer;
`;
