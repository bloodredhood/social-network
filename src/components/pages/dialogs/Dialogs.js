import React from "react"
import "./Dialogs.css"
import DialogsItem from "./dialogs-items/DialogsItem"
import MessagesItem from "./dialogs-items/MessagesItem"
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from "../../../redux/dialogsReducer"

const Dialogs = (props) => {

  const state = props.store.getState().dialogsPage

  const dialogsElements = state.dialogs.map(d => <DialogsItem id={d.id} name={d.name} />)
  const messageElements = state.messages.map(m => <MessagesItem id={m.id} message={m.message} />)
  const newMessageBody = state.newMessageBody
  
  const addNewMessage = () => {
    props.dispatch(sendMessageActionCreator())
  }

  const onNewMessageChange = (e) => {
    const body = e.target.value
    props.dispatch(updateNewMessageBodyActionCreator(body))
  }

  return (
    <div className='dialogsWrapper'>
      <div className='dialogsItems'>
        {dialogsElements}
      </div>
      <div className='dialogsMessagesWindow'>
        <div>
          <textarea onChange={onNewMessageChange} value={newMessageBody} />
        </div>
        <button onClick={addNewMessage}>add post</button>
        <div>{messageElements}</div> 
      </div>
    </div>
  )
}

export default Dialogs