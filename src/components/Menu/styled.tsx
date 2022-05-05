import styled, { css } from 'styled-components';
import { Link } from "react-router-dom";

const transitionDuration = '.4s';

export const Wrapper = styled.div<{ isOpened: boolean }>`
  ${({ isOpened }) => css`
    position: absolute;
    top: 50px;
    left: 0;
    width: 100vw;
    min-height: calc(100vh - 50px);
    height: calc(100vh - 50px);
    z-index: 1000;
    visibility: ${isOpened ? 'visible' : 'hidden'};
    transition: visibility 0s ${isOpened ? '0s' : transitionDuration};
  `}
`;

export const Background = styled.div<{ isOpened: boolean }>`
  ${({ isOpened }) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(112, 112, 112, 0.2);
    opacity: ${isOpened ? '1' : '0'};
    transition: opacity ${transitionDuration} 0s;
  `}
`;

export const Container = styled.div<{ isOpened: boolean }>`
  ${({ isOpened }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 420px;
    padding: 30px 0;
    height: 100%;
    background: #fff;
    z-index: 1010;
    overflow: auto;
    margin-left: ${isOpened ? '0' : '-420px'};
    transition: ${transitionDuration} margin-left ease-in-out;
  `}
`;

export const BtnWrapper = styled(Link)`
  margin-bottom: 20px;
  text-decoration: none;

  &:last-child {
    margin-bottom: 0;
  }
`;
