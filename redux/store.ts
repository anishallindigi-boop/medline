import { configureStore, Middleware, UnknownAction } from '@reduxjs/toolkit';
import  AuthSlice  from './slice/AuthSlice';
import  BlogCategorySlice  from './slice/BlogCategorySlice';
import BlogSlice  from './slice/BlogSlice';
import  ImageSlice  from './slice/ImageSlice';

const store = configureStore({
  reducer: {
      auth: AuthSlice,
       blogcategory:BlogCategorySlice,
    blog:BlogSlice,
       image: ImageSlice,
  },

})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Define the middleware type
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store