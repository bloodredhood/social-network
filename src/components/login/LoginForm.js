import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} >
      <div>
        <Field placeholder="Login" name={"login"} component={Input} validate={[required]} />
      </div>
      <div>
        <Field placeholder="Password" name={"password"} component={Input} validate={[required]} />
      </div>
      <div>
        <Field type={"checkbox"} name={"rememberMe"} component={Input} /> remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

export default reduxForm({ form: 'login' })(LoginForm)