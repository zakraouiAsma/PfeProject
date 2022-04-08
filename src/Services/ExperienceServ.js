import React, { Component } from 'react';
import axios from 'axios';
const BASE_URL = "http://localhost:9091/Experience/Api/experiences";
class ExperienceServ extends Component {
    getExperience() {
        return axios.get(BASE_URL);
    }

    getExperById(Exper) {
        return axios.get(BASE_URL + '/' + Exper);
    }
    deleteExper(Exper) {
        return axios.delete(BASE_URL + '/' + Exper);
    }
    updateExper(Exper) {
        return axios.put(BASE_URL, Exper);
    }
    register(poste, nomSociete, annéesExperience, dateDebut, dateFin) {
        return axios.post(BASE_URL, {
            poste,
            nomSociete,
            annéesExperience,
            dateDebut,
            dateFin,
        });
    }
}

export default new ExperienceServ();