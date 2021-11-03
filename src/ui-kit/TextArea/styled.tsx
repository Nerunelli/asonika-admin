import styled, { css } from 'styled-components';

export const Border = styled.div`
  ${({ theme: { colors } }) => css`
    border: 1px solid ${colors.greyDarkAlpha};
    border-radius: 10px;
    position: absolute;
    inset: 0;
    z-index: -1;
  `}
`;

export const Wrapper = styled.div<{
  // width?: string;
  // height?: string;
  labelFontSize: number;
}>`
  ${({ theme: { colors }, labelFontSize }) => css`
    position: relative;
    display: flex;
    align-items: center;
    padding: 12px 10px;
    margin-top: ${labelFontSize / 2}px;

    ${TextAreaUI}:focus ~ ${Border} {
      border: 2px solid ${colors.lightGreen};
    }
  `}
`;

export const TextAreaUI = styled.textarea`
  ${({ theme: { colors } }) => css`
    resize: none;
    border: none;
    width: 100%;
    height: 100%;
    outline: none;
    font-family: 'Roboto', sans-serif;
    background-color: transparent;

    &::placeholder {
      font-size: 14px;
      color: ${colors.greyDarkAlpha};
    }

    &:focus::placeholder {
      color: transparent;
    }
  `}
`;

export const LabelWrapper = styled.div<{ fontSize: number }>`
  ${({ fontSize }) => css`
    position: absolute;
    padding: 0 2px;
    left: 12px;
    background-color: #fff;
    top: -${fontSize / 2}px;
  `}
`;

export const LabelText = styled.div<{ fontSize: number }>`
  ${({ theme: { colors }, fontSize }) => css`
    font-size: ${fontSize}px;
    color: ${colors.greyDark};
  `}
`;
