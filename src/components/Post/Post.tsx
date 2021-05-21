import React, { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../assets/styles/Colors";

type Props = {
  posts: any[];
};

const Post: FC<Props> = ({ posts }: Props) => {
  return (
    <>
      {posts.map((post) => (
        <Container>
          <span key={post.id}>{post.title}</span>
          <p>{post.body}</p>
        </Container>
      ))}
    </>
  );
};

export default Post;

export const Container = styled.div`
  border-top: 1px solid ${Colors.primaryFontColor60};
  padding: 10px;
  span,
  p {
    font-size: 14px;
    margin: 0;
  }
`;
