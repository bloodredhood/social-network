import * as axios from "axios";
import React from "react";
import userPhoto from "../../../assets/images/user.png";

class UsersC extends React.Component {

  constructor(props) {
    super(props)

    axios.get("/users").then(response => {
      console.log(response);
      props.setUsers(response.data)
    })
  }

  render() {
    return (
      <div>
        {
          this.props.users.map(u =>
            <div key={u.id}>
              <span>
                <div>
                  <img style={{ width: "50px", height: "50px" }} src={u.photo != null ? u.photo : userPhoto} alt="" />
                </div>
                <div>
                  {u.followed
                    ? <button onClick={() => { this.props.unfollow(u.id) }} >Unfollow</button>
                    : <button onClick={() => { this.props.follow(u.id) }} >Follow</button>
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
}

export default UsersC