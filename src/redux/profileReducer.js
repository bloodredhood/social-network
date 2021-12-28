import {profileAPI, usersAPI} from "../api/api" 

const ADD_POST = "ADD_POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile})
export const setStatus = status => ({type: SET_STATUS, status})

const initialState = {
  posts: [
    { id: 1, likesCount: 1, text: "any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. " },
    { id: 2, likesCount: 15, text: "lorem lorem blablabla" },
    { id: 3, likesCount: 5, text: "SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED " },
  ],
  profile: null,
  status: ""
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: Date.now(),
        text: action.newPostText,
        likesCount: 0
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ""
      }
    }
    case SET_USER_PROFILE: {
      return {...state, profile: action.profile}
    }
    case SET_STATUS:{
      return {
          ...state,
          status: action.status
      }
    }
    default: return state
  }
}

export const getUserProfile = userId => dispatch => {
  usersAPI.getProfile(userId).then(response => {
    dispatch(setUserProfile(response.data))
    
  })
}

export const getStatus = userId => dispatch => {
  profileAPI.getStatus(userId).then(response => {
    dispatch(setStatus(response.data))
  })
}

export const updateStatus = status => dispatch =>{
  profileAPI.updateStatus(status).then(response => {
    if (response.data.data.resultCode === 0 ) {
      dispatch(setStatus(status))
    }
  })
}

export default profileReducer