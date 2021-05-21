import React, { FC } from "react";
import Loading from "../../components/Loading";

import PaginationComponent from "../../components/PaginationComponent";
import Post from "../../components/Post";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { fetchPosts } from "../../redux/Posts.slice";
import Box from "../Box";

const PostContainer: FC = () => {
  const dispatch = useAppDispatch();

  const posts = useAppSelector((state) => state.posts.posts);
  const status = useAppSelector((state) => state.posts.status);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage] = React.useState(5);

  React.useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <Box>
      {status === "loading" ? (
        <Loading />
      ) : (
        <>
          <Post posts={currentPosts} />
          <PaginationComponent
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            currentPage={setCurrentPage}
            page={currentPage}
          />
        </>
      )}
    </Box>
  );
};

export default PostContainer;
