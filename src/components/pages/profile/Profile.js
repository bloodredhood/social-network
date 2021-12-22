import React from "react";
import MyPostsContainer from "./profile-items/MyPostsContainer";
import ProfileInfo from "./profile-items/ProfileInfo";

const Profile = (props) => {

  return (
    <div className='profile'>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
      <MyPostsContainer />
    </div>
  )
}

export default Profile