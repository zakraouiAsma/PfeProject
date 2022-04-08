import React, { Component } from 'react';
import axios from 'axios';
const BASE_URL = "http://localhost:9091/competence/Api/competences";
class competenceServ extends Component {
    get() {
        return axios.get(BASE_URL);
    }

    getById(CompId) {
        return axios.get(BASE_URL + '/' + CompId);
    }
    delete(CompId) {
        return axios.delete(BASE_URL + '/' + CompId);
    }
    update(Comp) {
        return axios.put(BASE_URL, Comp);
    }
    register(langueParle, competence) {
        return axios.post(BASE_URL, {
            langueParle,
            competence,
        });
    }
}

export default new competenceServ();