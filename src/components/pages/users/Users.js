import * as axios from "axios";
import React from "react";
import userPhoto from "../../../assets/images/user.png";

const Users = (props) => {

  const getUsers = () => {
    if (props.users.length === 0) {
      axios.get("/users").then(response => {
        console.log(response);
        props.setUsers(response.data)})
    }
  }

  return (
    <div>
      <button onClick={getUsers}>Get Users</button>
      {
        props.users.map(u =>
          <div key={u.id}>
            <span>
              <div>
                <img style={{ width: "50px", height: "50px" }} src={ u.photo != null ? u.photo : userPhoto} alt="" />
              </div>
              <div>
                {u.followed
                  ? <button onClick={() => { props.unfollow(u.id) }} >Unfollow</button>
                  : <button onClick={() => { props.follow(u.id) }} >Follow</button>
                }

              </div>
            </span>
            <span>
              <span>
                <div>{u.fullName}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{u.location.country}</div>
                <div>{u.location.city}</div>
              </span>
            </span>
          </div>
        )
      }
    </div>
  )
}

export default Users