import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme: { shadow } }) => css`
    width: 650px;
    border-radius: 10px;
    box-shadow: ${shadow.main};
    padding: 20px;
  `}
`;
