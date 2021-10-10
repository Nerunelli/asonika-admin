import styled, { css } from 'styled-components';

export const SearchIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  cursor: pointer;
  padding-left: 10px;
`;

export const SearchIcon = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${({ theme: { colors } }) => colors.greyDarkAlpha};
  mask-image: url(static/icons/Search.svg);
  mask-repeat: no-repeat;
`;

export const Border = styled.div<{ onlyBottom?: boolean }>`
  ${({ theme: { colors }, onlyBottom }) => css`
    border: 1px solid ${colors.greyDarkAlpha};
    ${onlyBottom
      ? css`
          border-top: 0 !important;
          border-left: 0 !important;
          border-right: 0 !important;
          border-radius: 0 !important;
        `
      : ''}
    border-radius: 10px;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  `}
`;

export const Wrapper = styled.div<{ width: string; height: string; isError?: boolean }>`
  ${({ theme: { colors }, height, width, isError }) => css`
    position: relative;
    display: flex;
    align-items: center;
    height: ${height};
    width: ${width};
    padding-right: 10px;

    ${InputUI}:focus + ${SearchIconWrapper} > ${SearchIcon} {
      background-color: ${colors.darkGreen};
    }

    ${isError
      ? css`
          ${Border} {
            border: 1px solid ${isError ? colors.red : colors.lightGreen};
          }
        `
      : ''}

    ${InputUI}:focus ~ ${Border} {
      border: 2px solid ${isError ? colors.red : colors.lightGreen};
    }
  `}
`;

export const InputUI = styled.input`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    border: none;
    outline: none;
    background-color: transparent;
    height: 100%;
    width: 100%;
    padding-left: 10px;

    &::placeholder {
      font-size: 14px;
      color: ${colors.greyDarkAlpha};
    }

    &:focus::placeholder {
      color: transparent;
    }
  `}
`;

export const LabelWrapper = styled.div`
  position: absolute;
  padding: 0 2px;
  top: -25%;
  left: 12px;
  background-color: #fff;
  transform: translateY(25%);
`;

export const LabelText = styled.div`
  font-size: 12px;
  color: ${({ theme: { colors } }) => colors.greyDark};
`;
