import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    flex-direction: column;
    width: max-content;
    padding: 30px;
    background-color: ${colors.greyLightAlpha};
    border-radius: 10px;
  `}
`;

export const ButtonWrapper = styled.div`
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`;
