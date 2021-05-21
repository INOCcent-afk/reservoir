import React, { FC } from "react";

import { Container } from "./Post.styles";

type Props = {
  posts: any[];
};

const Post: FC<Props> = ({ posts }: Props) => {
  return (
    <>
      {posts.map((post) => (
        <Container key={post.id}>
          <span>{post.title.slice(0, -5)}</span>
          <p>{post.body.slice(0, -80)}</p>
        </Container>
      ))}
    </>
  );
};

export default Post;
