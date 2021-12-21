import React from "react";
import Preloader from "../../../common/Preloader";
import "../Profile.css"
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }

  return (
    <>

      <div className='infoColumn'>
        <div className='profilePhoto'>
          
          <img src={props.profile.photos.large} alt=""/>
        </div>
        <div className='personalInfo'>
          <ProfileStatus status={"Hello, my friends!"}/>
        </div>
      </div>
    </>
  )
}

export default ProfileInfo