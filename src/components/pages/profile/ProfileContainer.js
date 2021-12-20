import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfile } from "../../../redux/profileReducer";
import { useParams } from "react-router";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect"

const ProfileContainer = (props) => {

  const pageNum = useParams()
  const pageNumPick = (pageNum) => {
    for (let key in pageNum) {
      return pageNum[key]
    }
  }

  let userId = pageNumPick(pageNum)
  if (!userId) {
    userId = 21379
  }

  props.getUserProfile(userId)

  return (
    <Profile {...props} profile={props.profile} />
  )
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

const mapStateToProps = state => ({
  profile: state.profilePage.profile,
})


export default connect(mapStateToProps, { getUserProfile })(AuthRedirectComponent)