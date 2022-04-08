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
    registerCandidat(cin, nom, prenom, email, numeroTelephone, etatCivil, login, date_Naissance, adresse, image, cv, password) {
        return axios.post(Auth_API_BASE_URL + "signupCandidat", {
            cin,
            nom,
            prenom,
            email,
            numeroTelephone,
            etatCivil,
            login,
            date_Naissance,
            adresse,
            image,
            cv,
            password,

        });
    }
    registerClt(matriculeFiscale, nomSociete, raisonSociale, adresse, email, numeroTelephone, login, password) {
        return axios.post(Auth_API_BASE_URL + "signupClient", {
            matriculeFiscale,
            nomSociete,
            raisonSociale,
            adresse,
            email,
            numeroTelephone,
            login,
            password,

        });
    }
    registerCt(nom, prenom, email, numeroTelephone, adresse, matriculeFiscale, nomSociete, raisonSociale, logo, login, password) {
        return axios.post(Auth_API_BASE_URL + "signupClient", {
            nom,
            prenom,
            email,
            numeroTelephone,
            adresse,
            matriculeFiscale,
            nomSociete,
            raisonSociale,
            logo,
            login,
            password,
        });

    }
    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new RegisterService();