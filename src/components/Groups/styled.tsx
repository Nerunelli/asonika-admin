import styled, { css } from "styled-components";

export const Wrapper = styled.div`
${({theme: {colors}}) => css`
    display: flex;
    flex-direction: column;
    width: max-content;
    padding: 30px;
    background-color: ${colors.menuContainer};
    border-radius: 10px;
  `}
`;