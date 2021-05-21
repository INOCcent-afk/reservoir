import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getPosts as getPostsFromApi } from "../utils/api/fetchPosts";

const initialState: Posts = {
  posts: [],
  status: null,
};

type Posts = {
  posts: PostsInfo[];
  status: string | null;
};

type PostsInfo = {
  id: number;
  title: string;
  body: string;
};

export const fetchPosts: any = createAsyncThunk(
  "posts/fetchPosts",
  async () => {
    const posts = await getPostsFromApi();
    return posts;
  }
);

export const postsSlice = createSlice({
  name: "Posts",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.status = "loading";
    },
    [fetchPosts.fulfilled]: (state, { payload }) => {
      state.posts = payload;
      state.status = "succeded";
    },
    [fetchPosts.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default postsSlice.reducer;
