import React from "react";
import { connect } from "react-redux";
import LoginReduxForm from "./LoginForm";
import {login} from "../../redux/authReducer"

const Login = (props) => {

  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  }

	return (
		<div>
			<h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
		</div>
	)
}

export default connect(null, {login})(Login)