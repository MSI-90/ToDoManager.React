import Config from "./config";
import axios from 'axios';

export default class Request {
    #login
    #password
    constructor(email, password){
        this.#login = email || false;
        this.#password = password || false;
        this.authData = {
            accessToken: undefined, 
            refreshToken: undefined,
            expiryTime: undefined
        }

        this.incorrectUserLogin = {
            // email: undefined,
            // password: undefined,
            message: undefined
        }
    }

    async Login () {
        const url = Config.https + '/' + Config.loginPoint;
       
        try {
            if (!this.#login || !this.#password){
                throw new Error('Укажите логин и/или пароль');
            }

            const response = await axios.post(url, {
                email: this.#login,
                password: this.#password
            });

            if (response.status === 200) {
                this.authData.accessToken = response.data.accessToken; 
                this.authData.refreshToken = response.data.refreshToken; 
                this.authData.expiryTime = response.data.expiryTime;
                return this.authData;
            } // Возвращаем данные аутентификации
        } catch (error) {
            if (error.response && error.response.status === 422) {
                //Обработка ошибки 422
                // this.incorrectUserLogin.email = error.response.data.Email || null;
                // this.incorrectUserLogin.password = error.response.data.Password || null;
                this.incorrectUserLogin.message =  error.response.data.Email || error.response.data.Password || error.response.data.Message;
                // return this.incorrectUserLogin; // Возвращаем статус 422
                throw new Error(this.incorrectUserLogin.message);
            } else if (error.response && error.response.status === 404) {
                this.incorrectUserLogin.message = error.response.data.Message;
                throw new Error(this.incorrectUserLogin.message);
            } else {
                // console.log(error);
                throw error.message;
            }
        }
    }
}

