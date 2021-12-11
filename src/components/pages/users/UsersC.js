import * as axios from "axios";
import React from "react";
import styles from "./Users.module.css"
import userPhoto from "../../../assets/images/user.png";

class UsersC extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items)
      this.props.setTotalUsersCount(response.data.totalCount)
    })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items)
    })
  }

  render() {

    const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }

    return (
      <div>
        <div className={styles.continerForBreadCrumb}>
          {pages.map( p => {
            return <span className={this.props.currentPage === p && styles.selectedPage} onClick={(e) => {this.onPageChanged(p)}} >{p}</span>
          })}
        </div>
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
                  <div>{u.name}</div>
                  <div>{u.id}</div>
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