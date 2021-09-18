import styled from "styled-components";

export const Wrapper = styled.button`
  background-color: #fff;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 40px;
`;

export const Lines = styled.div`
  position: relative;
  width: 26px;
  height: 3px;
  background-color: #707070;
  border-radius: 4px;
  
  &::before, &::after {
    display: block;
    position: absolute;
    content: '';
    border-radius: 4px;
    width: 26px;
    height: 3px;
    background-color: #707070;
  };

  &::before {
    top: -7px;
  };

  &::after {
    bottom: -7px;
  };
`;