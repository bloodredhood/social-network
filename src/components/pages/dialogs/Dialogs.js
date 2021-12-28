import React from "react"
import "./Dialogs.css"
import DialogsItem from "./dialogs-items/DialogsItem"
import MessagesItem from "./dialogs-items/MessagesItem"
import { Field, reduxForm } from "redux-form"

const Dialogs = (props) => {

  const state = props.dialogsPage

  const dialogsElements = state.dialogs.map(d => <DialogsItem id={d.id} key={d.id} name={d.name} />)
  const messageElements = state.messages.map(m => <MessagesItem id={m.id} key={m.id} message={m.message} />)
  
  const addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
  }

  return (
    <div className='dialogsWrapper'>
      <div className='dialogsItems'>
        {dialogsElements}
      </div>
      <div className='dialogsMessagesWindow'>
        <div>{messageElements}</div>
        <AddMessageFormRedux onSubmit={addNewMessage}/>
      </div>
    </div>
  )
}

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component="textarea" name="newMessageBody" placeholder="Enter your message" />
      <div>
        <button>Send</button>
      </div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs