import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfile, getStatus, updateStatus } from "../../../redux/profileReducer";
import { useParams } from "react-router";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect"
import {compose} from "redux"

const ProfileContainer = (props) => {

  const pageNum = useParams()

  const pageNumPick = (pageNum) => {
    for (let key in pageNum) {
      return pageNum[key]
    }
  }

  let userId = pageNumPick(pageNum)
  if (!userId) {
    userId = props.authorizedUserId
    if(!userId) {
      props.history.push("/login")
    }
  }

  props.getUserProfile(userId)
  props.getStatus(userId)

  return (
    <Profile {...props} profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
  )
}

const mapStateToProps = state => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
})

export default compose(

  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),

  withAuthRedirect
  
)(ProfileContainer)