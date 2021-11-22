import React from "react";

const MessagesItem = (props) => {
   return (
    <div className='dialogsMessagesItem'>
      {props.message}
    </div>
   )
}

export default MessagesItem