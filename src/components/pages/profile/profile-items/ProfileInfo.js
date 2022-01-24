import React from "react";
import Preloader from "../../../common/Preloader";
import "../Profile.css"
import ProfileStatusFunc from "./ProfileStatusFunc"
import userPhoto from "../../../../assets/images/user.png";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if(e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  return (
    <div className='infoColumn'>
      <div className='profilePhoto'>
        <img src={profile.photos.large || userPhoto}
             alt="" />
      </div>
      { isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
      <div className='personalInfo'>
        <ProfileStatusFunc status={status} updateStatus={updateStatus} />
      </div>
    </div>
  )
}

export default ProfileInfo