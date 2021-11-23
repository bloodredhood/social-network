import React from "react"
import "./Dialogs.css"
import DialogsItem from "./dialogs-items/DialogsItem"
import MessagesItem from "./dialogs-items/MessagesItem"

const Dialogs = (props) => {

  const dialogsElements = props.dialogs.map(d => <DialogsItem key={d.id} name={d.name} />)
  const messageElements = props.messages.map(m => <MessagesItem key={m.id} message={m.message} />)

  return (
    <div className='dialogsWrapper'>
      <div className='dialogsItems'>
        {dialogsElements}
      </div>
      <div className='dialogsMessagesWindow'>
        {messageElements}
      </div>
    </div>
  )
}

export default Dialogs