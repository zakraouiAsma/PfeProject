import React, { Component } from 'react';
import axios from 'axios';
const OFFRE_API_BASE_URL = "http://localhost:9091/offre/Api/offres";

class OffreService extends Component {
    getOffre() {
        return axios.get(OFFRE_API_BASE_URL);
    }

    getOffreById(offreId) {
        return axios.get(OFFRE_API_BASE_URL + '/' + offreId);
    }
    deleteOffre(offreId) {
        return axios.delete(OFFRE_API_BASE_URL + '/' + offreId);
    }
    updateOffre(offre) {
        return axios.put(OFFRE_API_BASE_URL, offre);
    }
    registerOffre(titre, description, nombre_Poste, type, adresse, salaire, niveau, genre, langue, experience, categorie, motCles, date_ajout, date_expiration, image) {
        return axios.post(OFFRE_API_BASE_URL, {
            titre,
            description,
            nombre_Poste,
            type,
            adresse,
            salaire,
            niveau,
            genre,
            langue,
            experience,
            categorie,
            motCles,
            date_ajout,
            date_expiration,
            image,
        });
    }
}

export default new OffreService();