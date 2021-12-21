import React, { useState } from "react";

const ProfileStatus = (props) => {

  const [state, setState] = useState({ editMode: false })

  return (
    <div>
      {state.editMode === false &&
      <div>
        <span onClick={() => setState({editMode: true})}>{props.status}</span>
      </div> }
      {state.editMode === true &&
      <div>
        <input autoFocus={true} onBlur={() => setState({editMode: false})} value={props.status} />
      </div> }
    </div>
  )
}

export default ProfileStatus