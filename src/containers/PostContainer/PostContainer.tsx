import React, { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../assets/styles/Colors";
import Loading from "../../components/Loading";

import PaginationComponent from "../../components/PaginationComponent";
import Post from "../../components/Post";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { fetchPosts } from "../../redux/Posts.slice";

const PostContainer: FC = () => {
  const dispatch = useAppDispatch();

  const posts = useAppSelector((state) => state.posts.posts);
  const status = useAppSelector((state) => state.posts.status);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage] = React.useState(3);

  React.useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      {status === "loading" ? (
        <Loading />
      ) : (
        <Posts>
          <PostsTitle>
            <h1>Upcoming products</h1>
          </PostsTitle>
          <Post posts={currentPosts} />
          <PaginationComponent
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            currentPage={setCurrentPage}
            page={currentPage}
          />
        </Posts>
      )}
    </>
  );
};

export default PostContainer;

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
