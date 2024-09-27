import React, { useState } from "react";
import signinLogo from '../assets/bootstrap-logo.svg';
import Request from "../api/request";
import PropTypes from 'prop-types';

const SingIn = () => {
    const signInText = {
        captionForm: 'Совершить вход',
        loginLabel: 'Email адрес',
        passwordLabel: 'Пароль',
        rememberMeText: 'Запомнить меня',
        submitLoginData: 'Войти'
    }

    const [error, setError] = useState(null);

    const login = async (event) => {
        event.preventDefault();
        if (error != null){
            setError(null);
        }
        loader();
       
        let email = document.querySelector('#floatingInput').value;
        let password = document.querySelector('#floatingPassword').value;
        const request = new Request(email, password);
        try{
            const res = await request.Login();
        } catch (error) {
            console.log(error);
            setError(error.message ?? error);
        }
        finally{
            loader();
        }
    }

    const loader = () => {
        const loaderHTML = document.querySelector('#loader');
        const isHidden = loaderHTML.getAttribute('hidden') !== null;
        if (isHidden) {
            loaderHTML.removeAttribute('hidden');
        } else {
            loaderHTML.setAttribute('hidden', '');
        }
    }

    return (
        <div className="body-singin">
            <main className="form-signin ">
                <form>
                    <img className="mb-4" src={signinLogo} alt="" width="72" height="57"  />
                    <h1 className="h3 mb-3 fw-normal">{ signInText.captionForm }</h1>

                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">{ signInText.loginLabel }</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">{ signInText.passwordLabel }</label>
                    </div>
                    <div className="invalidData">
                        <span id = "loader" hidden>Loading...</span>
                        <span className="error-text">{error}</span>
                    </div>
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> { signInText.rememberMeText }
                        </label>
                    </div>
                    <button className="w-100 btn btn-primary" onClick={login}>{ signInText.submitLoginData }</button>
                    <p className="mt-5 mb-3 text-muted">&copy; {new Date().getFullYear()}</p>
                </form>
            </main>
        </div>
    );
}

export default SingIn;