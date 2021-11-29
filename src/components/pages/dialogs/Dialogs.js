import React from "react"
import "./Dialogs.css"
import DialogsItem from "./dialogs-items/DialogsItem"
import MessagesItem from "./dialogs-items/MessagesItem"

const Dialogs = (props) => {

  const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogsItem id={d.id} name={d.name} />)
  const messageElements = props.dialogsPage.messages.map(m => <MessagesItem id={m.id} message={m.message} />)

  const newMessageElement = React.createRef()
  
  const addNewMessage = () => {
    props.dispatch({type: "ADD_MESSAGE"})
  }

  const onMessageChange = () => {
    const text = newMessageElement.current.value
    props.dispatch({type: "UPDATE_NEW_MESSAGE_TEXT", newMessage: text})
  }

  return (
    <div className='dialogsWrapper'>
      <div className='dialogsItems'>
        {dialogsElements}
      </div>
      <div className='dialogsMessagesWindow'>
        <div>
          <textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText} />
        </div>
        <button onClick={addNewMessage}>add post</button>
        {messageElements}
      </div>
    </div>
  )
}

export default Dialogs