import React, { Component } from 'react';
import axios from 'axios';
const Auth_API_BASE_URL = "http://localhost:9091/api/auth/";


class RegisterService extends Component {

    LogIn(login, password) {

        return axios.post(Auth_API_BASE_URL + "signin",
            {
                login,
                password
            }).then(this.handleResponse)
            .then(response => {

                if (response.data.accesToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));

                }
                return response.data;
            });
    }
    logout() {
        localStorage.removeItem("user");
    }
    register(login, email, password, role) {
        return axios.post(Auth_API_BASE_URL + "signup", {
            login,
            email,
            role,
            password,

        });
    }
    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new RegisterService();