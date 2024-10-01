import React from "react";
import signinLogo from '../assets/bootstrap-logo.svg';
import PropTypes from 'prop-types';

const LoginForm = ({formTextInfo, onLogin, error}) => {
    return (  
        <form>
            <img className="mb-4" src={signinLogo} alt="" width="72" height="57"  />
            <h1 className="h3 mb-3 fw-normal">{ formTextInfo.captionForm }</h1>

            <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">{ formTextInfo.loginLabel }</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">{ formTextInfo.passwordLabel }</label>
            </div>
            <div className="invalidData">
                <span id = "loader" hidden>Loading...</span>
                <span className="error-text">{error}</span>
            </div>
            <div className="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me" /> { formTextInfo.rememberMeText }
                </label>
            </div>
            <button className="w-100 btn btn-primary" onClick={(event) => onLogin(event)}>{ formTextInfo.submitLoginData }</button>
            <p className="mt-5 mb-3 text-muted">&copy; {new Date().getFullYear()}</p>
        </form>
    );
}

LoginForm.propTypes = {
    formTextInfo: PropTypes.object.isRequired,
    onLogin: PropTypes.func,
    error: PropTypes.string
}
 
export default LoginForm;