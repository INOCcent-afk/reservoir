import React, { FC } from "react";

const PostContainer: FC = () => {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage] = React.useState(10);

  return <></>;
};

export default PostContainer;
