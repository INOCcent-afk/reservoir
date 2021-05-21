import React, { FC } from "react";

type Props = {
  posts: any[];
};

const Post: FC<Props> = ({ posts }: Props) => {
  return (
    <>
      {posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </>
  );
};

export default Post;
