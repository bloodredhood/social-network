import React from "react"
import "./Dialogs.css"
import DialogsItem from "./dialogs-items/DialogsItem"

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
        Hey, how are you? =)
      </div>
    </div>
  )
}

export default Dialogs