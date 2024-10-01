import React, { useState } from "react";
import LoginForm from "./loginForm";
import Request from "../api/request";


const SingIn = () => {
    const signInText = {
        captionForm: 'Совершить вход',
        loginLabel: 'Email адрес',
        passwordLabel: 'Пароль',
        rememberMeText: 'Запомнить меня',
        submitLoginData: 'Войти'
    }

    const [error, setError] = useState(null);

    const handleLogin = async (event) => {
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
            console.log(res);
        } catch (error) {
            let errorMessage = error.message ?? error;
            setError(errorMessage = errorMessage === 'Network Error' ? errorMessage = 'Ошибка сети' : errorMessage);
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
                <LoginForm formTextInfo = {signInText} onLogin = {handleLogin} error = {error} />
            </main>
        </div>
    );
}

export default SingIn;