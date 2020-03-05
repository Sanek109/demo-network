import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Input, createField} from "../common/formsControls/FormControls";
import {maxLengthCreator, required} from "../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from '../common/formsControls/FormControl.module.css';

const maxLength30 = maxLengthCreator(30)

const LoginForm = ({handleSubmit, error}) => {
    return (<form onSubmit={handleSubmit}>
            {createField('Login', 'email', Input, [required, maxLength30])}
            {createField('Password', 'password', Input, [required, maxLength30], 'password')}
            {createField(null, 'remember Me', Input, null, 'checkbox', 'RememberMe')}
        { error && <div className={style.formSummaryError}>
            {error}
        </div>}
        <div>
            <button>Login</button>
        </div>
    </form>)
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.remeberMe)
    }
    if(props.isAuth) {
        return <Redirect to={'/profile'} />
    }
    return (<div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>)
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.authReducer.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login);