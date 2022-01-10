import React from "react";
import Paginator from "../../common/Paginator/Paginator";
import User from "./User";

const Users = ({ currentPage, totalUsersCount, onPageChaged, pageSize, users, ...props }) => {

  return (
    <div>
      <Paginator currentPage={currentPage} totalUsersCount={totalUsersCount} onPageChaged={onPageChaged} pageSize={pageSize} />
      <div>
        { users.map(u => <User
            user={u}
            key={u.id}
            followingInProgress={props.followingInProgress}
            unfollow={props.unfollow}
            follow={props.follow}
          />
        ) }
      </div>
    </div>
  )
}

export default Users