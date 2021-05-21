import styled from "styled-components";
import { Colors } from "../../assets/styles/Colors";

export const Posts = styled.div`
  border-radius: 8px;
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  background: ${Colors.primaryBackgroundColor};
  margin-bottom: 10px;
  overflow: hidden;
`;

export const PostsTitle = styled.div`
  padding: 20px;
  h1 {
    font-size: 20px;
  }
`;
