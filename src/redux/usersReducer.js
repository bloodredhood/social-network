const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (userId) => ({type: SET_USERS, users})


const initialState = {
  users: [
    { id: 1, followed: true, fullName: "JavaScript", status: "i'am basis", location: { city: "Minsk", country: 'Belarus' } },
    { id: 2, followed: false, fullName: "GitHub", status: "commit here", location: { city: "Los-Angeles", country: 'USA' } },
    { id: 3, followed: true, fullName: "React", status: "Facebook = Meta", location: { city: "Zukerburg", country: 'Zukerland' } },
    { id: 4, followed: false, fullName: "Redux", status: "BLL holder", location: { city: "Berlin", country: 'Germany' } },
    { id: 5, followed: true, fullName: "Google", status: "Big browser looking at you", location: { city: "Manchester", country: 'Oceania' } },
    { id: 6, followed: false, fullName: "YouTube", status: "please, tell me that my shorts are better than whole Tik-tok", location: { city: "Paris", country: 'France' } },
  ]
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map(u => {
          if(u.id === action.userId) {
            return {...u, followed: true}
          }
        })
      }
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map(u => {
          if(u.id === action.userId) {
            return {...u, followed: false}
          }
        })
      }
    }
    case SET_USERS: {
      return {...state, users: [ state.users, ...action.users ]}
    }

    default: return state
  }
}

export default usersReducer