import React from "react"
import { connect } from "react-redux"
import { follow, unfollow, setCurrentPage, toggleIsFollowingProgress, requestUsers } from "../../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../../common/Preloader";
import {compose} from "redux"
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from "../../../redux/usersSelectors";

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber) => {

    this.props.getUsers(pageNumber, this.props.pageSize)

  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress} />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}



export default compose(

  connect(mapStateToProps, {
    follow, unfollow, setCurrentPage, toggleIsFollowingProgress, getUsers: requestUsers
  }),

  
)(UsersContainer)