import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: end;
  margin-top: -17px;
`;

export const ButtonWrapper = styled.div`
  margin-right: 16px;
  &:last-child {
    margin-right: 0;
  }
`;

export const Input = styled.input<{ disabled: boolean }>`
  ${({ disabled, theme: { colors } }) => css`
    height: 38px;
    width: 130px;
    border: 1px solid ${colors.greyDarkAlpha};
    min-width: calc(100% / 3);
    padding: 0 10px;
    color: ${colors.greyDark};
    background-color: ${disabled ? colors.greyLightAlpha : ''};

    &:focus {
      outline: none;
      background-color: ${colors.lightGreenAlpha};
      border: 1px solid ${colors.lightGreen};
    }
  `}
`;

export const LeftField = styled(Input)`
  border-radius: 10px 0 0 10px;
`;

export const RightField = styled(Input)`
  border-radius: 0 10px 10px 0;
  margin-left: -1px;
`;

// export const CheckMark = styled.div`
//   width: 18px;
//   outline: none;
//   height: 17px;
//   background-image: url('/static/icons/CheckMark.svg');
//   background-repeat: no-repeat;
//   background-position: center;
// `;

// border-radius: ${right ? '0 10px 10px 0' : '10px 0 0 10px'};
