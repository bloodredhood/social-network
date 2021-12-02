import React from "react"
import "./Dialogs.css"
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from "../../../redux/dialogsReducer"
import Dialogs from "./Dialogs"
import {connect} from "react-redux"

const mapStateToProps = (state) => {
  return {
    dialogsPage: {...state.dialogsPage}
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyActionCreator(body))
    },
    sendMessage: () => {
      dispatch(sendMessageActionCreator())
    },
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer