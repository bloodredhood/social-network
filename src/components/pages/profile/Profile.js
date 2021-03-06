import React from "react";
import { Navigate } from "react-router";
import MyPostsContainer from "./profile-items/MyPostsContainer";
import ProfileInfo from "./profile-items/ProfileInfo";

const Profile = (props) => {

  if (!props.isAuth) return <Navigate to="/login" />

  return (
    <div className='profile'>
      <ProfileInfo profile={props.profile}
                   status={props.status}
                   updateStatus={props.updateStatus}
                   isOwner={props.isOwner}
                   savePhoto={props.savePhoto}
                   saveProfile={props.saveProfile}
      />
      <MyPostsContainer />
    </div>
  )
}

export default Profile