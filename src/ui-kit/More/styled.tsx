import styled from "styled-components";

export const Wrapper = styled.button`
  background-color: #fff;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 40px;
`;

export const Dots = styled.div`
  position: relative;
  width: 5px;
  height: 5px;
  background-color: #707070;
  border-radius: 50%;

  &::before, &::after {
    display: block;
    position: absolute;
    content: '';
    width: 5px;
    height: 5px;
    background-color: #707070;
    border-radius: 50%;
  }

  &::before {
    top: -7px;
  }

  &::after {
    bottom: -7px;
  }

 `;