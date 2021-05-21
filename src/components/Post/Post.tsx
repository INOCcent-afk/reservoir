import React, { FC } from "react";

type Props = {
  posts: any[];
};

const Post: FC<Props> = ({ posts }: Props) => {
  return (
    <div>
      {posts.map((post) => (
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      ))}
    </div>
  );
};

export default Post;
