import styled from 'styled-components';

export const ButtonsWrap = styled.div`
  margin-bottom: 30px;
`;

export const ItemsContainer = styled.div`
  width: 470px;
  margin-right: 30px;
`;

export const ItemWrapper = styled.button`
  padding: 0;
  background: none;
  cursor: pointer;
  border-radius: 10px;
  border: none;
  min-width: 470px;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const SpecificationsContainer = styled.div`
  display: flex;
`;
