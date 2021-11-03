import styled from 'styled-components';

export const ButtonsWrap = styled.div`
  display: flex;
  width: 470px;
  margin-bottom: 30px;
  justify-content: space-between;
  align-items: center;
`;

export const ItemsContainer = styled.div`
  width: 470px;
`;

export const ItemWrapper = styled.div`
  min-width: 470px;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const ParamsContainer = styled.div`
  display: flex;
`;
