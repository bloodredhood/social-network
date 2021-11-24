import React from "react"
import "./Dialogs.css"
import DialogsItem from "./dialogs-items/DialogsItem"
import MessagesItem from "./dialogs-items/MessagesItem"

const Dialogs = (props) => {

  const dialogsElements = props.dialogs.map(d => <DialogsItem id={d.id} name={d.name} />)
  const messageElements = props.messages.map(m => <MessagesItem id={m.id} message={m.message} />)

  const newPersonalPostElement = React.createRef()
  const addPersonalPost = () => {
    const text = newPersonalPostElement.current.value
  }

  return (
    <div className='dialogsWrapper'>
      <div className='dialogsItems'>
        {dialogsElements}
      </div>
      <div className='dialogsMessagesWindow'>
        <textarea ref={newPersonalPostElement}></textarea>
        <button onClick={addPersonalPost}>add post</button>
        {messageElements}
      </div>
    </div>
  )
}

export default Dialogs