import React from "react";
import MyPostsContainer from "./profile-items/MyPostsContainer";
import ProfileInfo from "./profile-items/ProfileInfo";

const Profile = (props) => {

  return (
    <div className='profile'>
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
    </div>
  )
}

export default Profile