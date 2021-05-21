import React, { FC } from "react";
import Pagination from "../../components/Pagination";
import Post from "../../components/Post";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { fetchPosts } from "../../redux/Posts.slice";

const PostContainer: FC = () => {
  const dispatch = useAppDispatch();

  //   const [posts, setPosts] = React.useState<any[]>([]);
  //   const [loading, setLoading] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage] = React.useState(3);

  const posts = useAppSelector((state) => state.posts.posts);
  const status = useAppSelector((state) => state.posts.status);

  React.useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  return (
    <>
      <h1 className="text-primary mb-3">My Blog</h1>
      <Post posts={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </>
  );
};

export default PostContainer;
