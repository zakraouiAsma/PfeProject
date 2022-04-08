import React, { Component } from 'react';
import axios from 'axios';
const BASE_URL = "http://localhost:9091/Formation/Api/formations";
class FormationServ extends Component {
    get() {
        return axios.get(BASE_URL);
    }

    getById(formId) {
        return axios.get(BASE_URL + '/' + formId);
    }
    delete(formId) {
        return axios.delete(BASE_URL + '/' + formId);
    }
    update(form) {
        return axios.put(BASE_URL, form);
    }
    register(niveauActuel, diplome, universite, lieu, dateDebut, dateFin) {
        return axios.post(BASE_URL, {
            niveauActuel,
            diplome,
            universite,
            lieu,
            dateDebut,
            dateFin,
        });
    }
}
export default new FormationServ();