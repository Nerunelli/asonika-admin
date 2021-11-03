import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid ${colors.greyDarkAlpha};
    height: 38px;
    padding: 0 10px;
    width: 370px;
    border-radius: 10px;
  `}
`;

export const Text = styled.div<{ empty: boolean }>`
  ${({ theme: { colors }, empty }) => css`
    font-size: 14px;
    color: ${empty ? colors.greyDarkAlpha : '#000'};
    user-select: none;
  `}
`;

export const Arrow = styled.div`
  width: 8px;
  outline: none;
  height: 12px;
  background-image: url('/static/icons/Arrow.svg');
  background-repeat: no-repeat;
  background-position: center;
  transform: rotate(90deg);
`;

export const Options = styled.div<{ open: boolean }>`
  ${({ theme: { shadow }, open }) => css`
    position: absolute;
    //margin-top: 10px;
    width: 370px;
    max-height: 210px;
    background-color: #fff;
    display: ${open ? 'flex' : 'none'};
    border-radius: 10px;
    overflow: hidden;
    overflow-y: auto;
    flex-wrap: nowrap;
    flex-direction: column;
    box-shadow: ${shadow.main};
    z-index: 100;
  `}
`;

export const OptionsItem = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    min-height: 38px;
    padding: 0 10px;
    cursor: pointer;
    user-select: none;
    font-size: 14px;

    &:hover {
      background-color: ${colors.lightGreenAlpha};
    }
  `}
`;
