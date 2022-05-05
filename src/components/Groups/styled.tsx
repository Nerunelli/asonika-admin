import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    flex-direction: column;
    width: max-content;
    padding: 30px;
    background-color: ${colors.greySuperLightAlpha};
    border-radius: 10px;
  `}
`;

export const ButtonWrapper = styled(Link)`
  margin-bottom: 20px;
  text-decoration: none;

  &:last-child {
    margin-bottom: 0;
  }
`;
