import styled from "styled-components";
import { Colors } from "../../assets/styles/Colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  max-height: calc(85vh - 30px);
  overflow: hidden;
`;

export const Wrapper = styled.div`
  overflow-y: scroll;
  padding: 0 5px;

  ::-webkit-scrollbar {
    width: 0;
  }

  ::-webkit-scrollbar-track {
    background: ${Colors.body};
  }

  ::-webkit-scrollbar-thumb {
    background: ${Colors.secondaryBackgroundColor};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-button {
    background: ${Colors.body};
    height: 5px;
  }
`;
