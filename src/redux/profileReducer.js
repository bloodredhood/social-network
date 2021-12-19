import {usersAPI} from "../api/api" 

const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostActionCreator = text => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile})

const initialState = {
  posts: [
    { id: 1, likesCount: 1, text: "any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. " },
    { id: 2, likesCount: 15, text: "lorem lorem blablabla" },
    { id: 3, likesCount: 5, text: "SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED " },
  ],
  newPostText: "",
  profile: null
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      }
    }
    case ADD_POST: {
      const newPost = {
        id: Date.now(),
        text: state.newPostText,
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
    default: return state
  }
}

export const getUserProfile = userId => dispatch => {
  usersAPI.getProfile(userId).then(response => {
    dispatch(setUserProfile(response.data))
    
  })
} 

export default profileReducer