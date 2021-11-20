import React from "react";

const MessagesItem = (props) => {
   return (
    <div className='dialogsMessagesItem'>
      {props.messages}
    </div>
   )
}

export default MessagesItem