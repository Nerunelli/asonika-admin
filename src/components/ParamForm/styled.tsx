import styled, { css } from 'styled-components';

export const Container = styled.form`
  ${({ theme: { shadow } }) => css`
    max-width: 650px;
    width: 100%;
    border-radius: 10px;
    box-shadow: ${shadow.main};
    padding: 20px;
    height: 100%;
    margin-left: 30px;
  `}
`;

export const Wrapper = styled.div`
  margin-bottom: 20px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
