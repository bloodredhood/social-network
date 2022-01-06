import React from "react";
import Preloader from "../../../common/Preloader";
import "../Profile.css"
import ProfileStatusFunc from "./ProfileStatusFunc"

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
          <ProfileStatusFunc status={props.status} updateStatus={props.updateStatus} />
        </div>
      </div>
    </>
  )
}

export default ProfileInfo