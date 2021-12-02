import React from "react"
import "./Dialogs.css"
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from "../../../redux/dialogsReducer"
import Dialogs from "./Dialogs"
import StoreContext from "../../../StoreContext"

const DialogsContainer = () => {

  return (
    <StoreContext.Consumer>
      {
        (store) => {
          const state = store.getState().dialogsPage

          const addNewMessage = () => {
            store.dispatch(sendMessageActionCreator())
          }

          const onNewMessageChange = (body) => {
            store.dispatch(updateNewMessageBodyActionCreator(body))
          }
          
          return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={addNewMessage} dialogsPage={state} />
        }
      }
    </StoreContext.Consumer>
    
  )
}

export default DialogsContainer