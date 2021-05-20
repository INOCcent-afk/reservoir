import styled from "styled-components";

export const LoaderContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 80px;
    height: 80px;
  }
`;
