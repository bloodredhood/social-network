import React, { useState } from "react";

const ProfileStatusFunc = (props) => {

  const [editMode, setEditMode] = useState(true)
  const [status, setStatus] = useState(props.status)

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

  return (
    <div>
      {!editMode &&
        <div>
          <span onClick={activateEditMode}>{props.status || "empty status"}</span>
        </div>}
      {editMode &&
        <div>
          <input autoFocus={false} onChange={onStatusChange} onBlur={deactivateEditMode} value={status} />
        </div>}
    </div>
  )
}

export default ProfileStatusFunc