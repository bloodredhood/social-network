import React from "react";
import { reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { createField, Input } from "../common/FormsControls/FormsControls";
import "../common/FormsControls/FormsControls.module.css"

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit} >
      {createField("Email", "email", [required], Input)}
      {createField("Password", "password", [required], Input, { type: "password" })}
      {createField(
          null, "rememberMe", [], Input, { type: "checkbox" }, "remember me"
      )}

      {captchaUrl && <img alt="captcha" src={captchaUrl}/>}
      {captchaUrl && createField("", "captcha", [required], Input, {})}
      {
        error && <div className="formSummaryError">
          {error}
        </div>
      }
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

export default reduxForm({ form: 'login' })(LoginForm)