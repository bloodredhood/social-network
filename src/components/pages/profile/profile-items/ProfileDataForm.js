import React from "react";
import {createField, Input, Textarea} from "../../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import "../Profile.css"

const ProfileDataForm = ({handleSubmit, profile}) => {
  return (
      <form onSubmit={handleSubmit}>
        <div><button onClick={ () => {} } >Save</button></div>
        <div>
          <b>Full name</b>: {createField(
              "Full name", "fullName", [], Input
        )}
        </div>
        <div>
          <b>Looking for a job</b> {createField(
              "", "lookingForAJob", [], Input, {type: "checkbox"}
              )}
        </div>
        <div>
            <b>My professional skills</b> {createField(
            "My professional skills", "lookingForAJobDescription", [], Textarea
        )}
        </div>
        <div>
          <b>About me</b> {createField(
              "About me", "aboutMe", [], Textarea
        )}
        </div>
        <div>
          <b>Contacts</b>: {Object.keys(profile.contacts)
            .map(key => <div className="contact">
              <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
            </div>)}
        </div>
      </form>
  )
}

const ProfileDataFormReduxForm = reduxForm({form: "edit-profile"})(ProfileDataForm)

export default ProfileDataFormReduxForm