import React from "react";
import { addPostActionCreator, updateNewPostActionCreator } from "../../../../redux/profileReducer";
import StoreContext from "../../../../StoreContext";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

  return (
    <StoreContext.Consumer>
      {
        (store) => {
          const state = store.getState().profilePage

          const addNewPost = () => {
            store.dispatch(addPostActionCreator())
          }
          const onPostChange = (text) => {
            store.dispatch(updateNewPostActionCreator(text))
          }
          return <MyPosts updateNewPostText={onPostChange} addPost={addNewPost} posts={state.posts} newPostText={state.newPostText} />
        }
      }
    </StoreContext.Consumer>
  )
}

export default MyPostsContainer