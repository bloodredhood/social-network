import React from "react";
import styles from "./Users.module.css"
import userPhoto from "../../../assets/images/user.png";
import { NavLink } from "react-router-dom";

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
                  ?
                  <button disabled={props.followingInProgress
                    .some(id => id === u.id)}
                  onClick={() => {props.unfollow(u.id)}} >Unfollow</button>
                  :
                  <button disabled={props.followingInProgress
                    .some(id => id === u.id)}
                  onClick={() => {props.follow(u.id)}} >Follow</button>
                }
                
              </div>
            </span>
            <span>
              <span>
                <div>{u.name}</div>
                <div>{u.id}</div>
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