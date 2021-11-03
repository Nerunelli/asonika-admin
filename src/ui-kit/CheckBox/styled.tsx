import styled, { css } from 'styled-components';

interface IStyledCheckbox {
  checked: boolean;
}

export const CheckboxContainer = styled.label``;

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  overflow: hidden;
  position: absolute;
  visibility: hidden;
`;

export const StyledCheckbox = styled.div<IStyledCheckbox>`
  ${({ checked, theme: { colors } }) => css`
    display: inline-block;
    width: 16px;
    height: 16px;
    background: ${checked ? colors.darkGreen : 'white'};
    border-radius: 3px;
    border: ${checked ? 'none' : '1px solid black'};
    transition: all 150ms;
    cursor: pointer;

    ${Icon} {
      visibility: ${checked ? 'visible' : 'hidden'};
    }
  `}
`;
