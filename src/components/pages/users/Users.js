import React from "react";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      { id: 1, followed: true, fullName: "JavaScript", status: "i'am basis", location: { city: "Minsk", country: 'Belarus' } },
      { id: 2, followed: false, fullName: "GitHub", status: "commit here", location: { city: "Los-Angeles", country: 'USA' } },
      { id: 3, followed: true, fullName: "React", status: "Facebook = Meta", location: { city: "Zukerburg", country: 'Zukerland' } },
      { id: 4, followed: false, fullName: "Redux", status: "BLL holder", location: { city: "Berlin", country: 'Germany' } },
      { id: 5, followed: true, fullName: "Google", status: "Big browser looking at you", location: { city: "Manchester", country: 'Oceania' } },
      { id: 6, followed: false, fullName: "YouTube", status: "please, tell me that my shorts are better than whole Tik-tok", location: { city: "Paris", country: 'France' } },
    ])
  }
  return (
    <div>
      {
        props.users.map(u =>
          <div key={u.id}>
            <span>
              <div style={{ backgroundColor: "red", width: "50px", height: "50px" }}>

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