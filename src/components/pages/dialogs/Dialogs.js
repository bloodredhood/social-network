import React from "react"
import "./Dialogs.css"
import DialogsItem from "./dialogs-items/DialogsItem"
import MessagesItem from "./dialogs-items/MessagesItem"

const Dialogs = () => {
  return (
    <div className='dialogsWrapper'>
      <div className='dialogsItems'>
        <DialogsItem id={1} name={'JavaScript'} />
        <DialogsItem id={2} name={'GitHub'} />
        <DialogsItem id={3} name={'React'} />
        <DialogsItem id={4} name={'Redux'} />
        <DialogsItem id={5} name={'Google'} />
        <DialogsItem id={6} name={'YouTube'} />
      </div>
      <div className='dialogsMessagesWindow'>
        <MessagesItem messages={'Hey, how are you? =)'}/>
        <MessagesItem messages={'Hello world'}/>
        <MessagesItem messages={'Hi'}/>
      </div>
    </div>
  )
}

export default Dialogs