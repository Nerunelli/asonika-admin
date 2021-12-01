import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
  height: 20px;
  font-size: 12px;
`;

export const CrumbItem = styled(Link)`
  ${({ theme: { colors } }) => css`
    margin-right: 8px;
    margin-left: 8px;
    color: ${colors.greyDark};
    text-decoration: none;

    &:last-child {
      font-weight: bold;
      color: ${colors.darkGreen};
      margin-right: 0;
    }
    &:first-child {
      margin-left: 0;
    }
  `}
`;

export const CrumbImg = styled.div`
  width: 4px;
  outline: none;
  height: 8px;
  background-image: url('/static/icons/Arrow.svg');
  background-repeat: no-repeat;
  background-position: center;
`;

export const StyledLink = styled(Link)`
  ${({ theme: { colors } }) => css`
    color: ${colors.greyDark};
    text-decoration: none;
    margin-right: 8px;
    margin-left: 8px;

    &:last-child {
      font-weight: bold;
      color: ${colors.darkGreen};
      margin-right: 0;
    }
    &:first-child {
      margin-left: 0;
    }
  `}
`;
