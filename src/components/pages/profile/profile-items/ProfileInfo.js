import React from "react";
import Preloader from "../../../common/Preloader";
import "../Profile.css"

const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }

  console.log(props.profile)

  return (
    <>
      <div className='infoColumn'>
        <div className='profilePhoto'>
          
          <img src={props.profile.photos.large} alt=""/>
        </div>
        <div className='personalInfo'>
          profile info
        </div>
      </div>
    </>
  )
}

export default ProfileInfo