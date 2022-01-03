import { stopSubmit } from "redux-form"
import {authAPI} from "../api/api"

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA"

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_AUTH_USER_DATA, payload: {userId, email, login, isAuth} })

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.payload
      }
    default: return state
  }
}

export const getAuthUserData = () => dispatch => {
  authAPI.me().then(response => {
    if (response.data.resultCode === 0) {
      const {id, email, login} = response.data.data
      dispatch(setAuthUserData(id, email, login, true))
    }
  })
}

export const login = (email, password, rememberMe) => dispatch => {
  authAPI.login(email, password, rememberMe)
  .then(response => {
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData())
    } else {
      dispatch(stopSubmit("login", {_error: "email or password is wrong"}))
    }
  })
}

export const logout = () => dispatch => {
  authAPI.logout()
  .then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false))
    }
  })
}

export default authReducer