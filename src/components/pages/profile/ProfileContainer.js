import axios from "axios";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile } from "../../../redux/profileReducer";
import { useParams } from "react-router";

const ProfileContainer = (props) => {

  const userId = useParams()
  const pageNumPick = (userId) => {
    for (let key in userId) {
      return userId[key]
    }
  }

  let pageNum = pageNumPick(userId)
  if (!pageNum) {
    pageNum = 2
  }

  useEffect(() => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${pageNum}`).then(response => {
      props.setUserProfile(response.data)
      
    })
  })

  return (
    <Profile {...props} profile={props.profile} />
  )
}

const mapStateToProps = state => ({
  profile: state.profilePage.profile
})


export default connect(mapStateToProps, { setUserProfile })(ProfileContainer)