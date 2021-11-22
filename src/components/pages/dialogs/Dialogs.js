import React from "react"
import "./Dialogs.css"
import DialogsItem from "./dialogs-items/DialogsItem"
import MessagesItem from "./dialogs-items/MessagesItem"

const dialogs = [
  {id: 1, name: 'JavaScript'},
  {id: 2, name: 'GitHub'},
  {id: 3, name: 'React'},
  {id: 4, name: 'Redux'},
  {id: 5, name: 'Google'},
  {id: 6, name: 'YouTube'},
]

const messages = [
  {id: 1, message: 'Hey, how are you? =)'},
  {id: 2, message: 'Hello world'},
  {id: 3, message: 'Hi'},
  {id: 4, message: 'bb gl hf'},
  {id: 5, message: 'cya'},
  {id: 6, message: 'you welcome'},
]

const dialogsElements = dialogs.map(d => <DialogsItem id={d.id} name={d.name} />)
const messageElements = messages.map(m => <MessagesItem message={m.message}/>)

const Dialogs = () => {
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