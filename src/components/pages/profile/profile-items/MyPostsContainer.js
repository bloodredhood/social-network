import React from "react";
import { addPostActionCreator, updateNewPostActionCreator } from "../../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

  const state = props.store.getState()

  const addNewPost = () => {
    props.store.dispatch(addPostActionCreator())
  }

  const onPostChange = (text) => {
    props.store.dispatch(updateNewPostActionCreator(text))
  }

  return (
    <MyPosts updateNewPostText={onPostChange} addPost={addNewPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />
  )
}

export default MyPostsContainer