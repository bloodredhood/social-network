import React from "react"
import "./Dialogs.css"
import DialogsItem from "./dialogs-items/DialogsItem"
import MessagesItem from "./dialogs-items/MessagesItem"

const Dialogs = (props) => {

  const state = props.dialogsPage

  const dialogsElements = state.dialogs.map(d => <DialogsItem id={d.id} key={d.id} name={d.name} />)
  const messageElements = state.messages.map(m => <MessagesItem id={m.id} key={m.id} message={m.message} />)
  const newMessageBody = state.newMessageBody
  
  const addNewMessage = () => {
    props.sendMessage()
  }

  const onNewMessageChange = (e) => {
    const body = e.target.value
    props.updateNewMessageBody(body)
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
        <button onClick={addNewMessage}>Send</button>
        <div>{messageElements}</div> 
      </div>
    </div>
  )
}

export default Dialogs