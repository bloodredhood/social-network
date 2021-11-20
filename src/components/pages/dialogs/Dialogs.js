import React from "react"
import "./Dialogs.css"

const Dialogs = (props) => {
  return (
    <div className='dialogsWrapper'>
      <div className='dialogsItems'>
        <div className='dialogsItem active'>JavaScript</div>
        <div className='dialogsItem'>GitHub</div>
        <div className='dialogsItem'>React</div>
        <div className='dialogsItem'>Redux</div>
        <div className='dialogsItem'>Google</div>
        <div className='dialogsItem'>YouTube</div>
      </div>
      <div className='dialogsMessagesWindow'>
        Hey, how are you? =)
      </div>
    </div>
  )
}

export default Dialogs