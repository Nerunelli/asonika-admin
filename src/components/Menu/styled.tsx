import styled from "styled-components";

export const Background = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  width: 100vw;
  height: calc(100vh - 50px);
  background: rgba(112, 112, 112, 0.2);
  z-index: 1000;
`;

export const Container = styled.div`
  position: absolute;
  
  top: 50px;
  left: 0;
  width: max-content;
  padding: 30px;
  height: calc(100vh - 50px);
  background: #fff;
  z-index: 1010;
`;