import React, { Component } from 'react';
import axios from 'axios';
const Entretien_API_BASE_URL = "http://localhost:9091/entretien/Api/entretiens";

class EntretienServ extends Component {
    getEntretien() {
        return axios.get(Entretien_API_BASE_URL);
    }

    getEntretienById(entretiensID) {
        return axios.get(Entretien_API_BASE_URL + '/' + entretiensID);
    }
    deleteEntretien(entretiensID) {
        return axios.delete(Entretien_API_BASE_URL + '/' + entretiensID);
    }
    updateEntretien(entretien) {
        return axios.put(Entretien_API_BASE_URL, entretien);
    }
    registerEntretien(titre_entretien, lieu_entretien, description, email, date_entretien, temps_debut, temps_fin) {
        return axios.post(Entretien_API_BASE_URL, {
            titre_entretien,
            lieu_entretien,
            description,
            email,
            date_entretien,
            temps_debut,
            temps_fin,
        });
    }

}

export default new EntretienServ();