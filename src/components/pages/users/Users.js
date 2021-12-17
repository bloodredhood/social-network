import React from "react";
import styles from "./Users.module.css"
import userPhoto from "../../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import * as axios from "axios"

const Users = (props) => {

  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

  const pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      <div className={styles.continerForBreadCrumb}>
        {pages.map(p => {
          return <span className={props.currentPage === p && styles.selectedPage} onClick={(e) => { props.onPageChanged(p) }} >{p}</span>
        })}
      </div>
      {
        props.users.map(u =>
          <div key={u.id}>
            <span>
              <div>
                <NavLink to={"/profile/" + u.id}>
                  <img style={{ width: "75px", height: "75px" }} src={u.photos.small != null ? u.photos.small : userPhoto} alt="" />
                </NavLink>
              </div>
              <div>
                {u.followed
                  ? <button onClick={() => {
                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, { withCredentials: true, headers: {
                      "API-KEY" : "2f40007e-3ab8-4199-871c-75f3dd3c886e"
                    }}).then(response => {
                      if (response.data.resultCode === 0) {
                        props.unfollow(u.id)
                      }
                    })
                  }} >Follow</button>
                  : <button onClick={() => {
                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, { withCredentials: true, headers: {
                      "API-KEY" : "2f40007e-3ab8-4199-871c-75f3dd3c886e"
                    }}).then(response => {
                      if (response.data.resultCode === 0) {
                        props.follow(u.id)
                      }
                    })
                  }} >Unfollow</button>
                }

              </div>
            </span>
            <span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
            </span>
          </div>
        )
      }
    </div>
  )
}

export default Users