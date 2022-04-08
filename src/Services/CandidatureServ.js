import React, { Component } from 'react';
import axios from 'axios';
const CAND_API_BASE_URL = "http://localhost:9091/candidature/Api/candidatures";

class CandidatureServ extends Component {
    getCand() {
        return axios.get(CAND_API_BASE_URL);
    }

    getCandById(candId) {
        return axios.get(CAND_API_BASE_URL + '/' + candId);
    }
    deleteCand(candId) {
        return axios.delete(CAND_API_BASE_URL + '/' + candId);
    }
    updateCand(cand) {
        return axios.put(CAND_API_BASE_URL, cand);
    }
    registerCand(nom, prenom, email, lettre_motivation, cv) {
        return axios.post(CAND_API_BASE_URL, {
            nom,
            prenom,
            email,
            lettre_motivation,
            cv,
        });
    }
}
export default new CandidatureServ();