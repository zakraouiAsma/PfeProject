import axios from 'axios';
import authHeader from './auth_Header';
import React, { Component } from 'react';
const Auth_API_BASE_URL = "http://localhost:9091/api/test/";
class UserService extends Component {
    getPublicContent() {
        return axios.get(Auth_API_BASE_URL + 'all');

    }

    getUserBoard() {
        return axios.get(Auth_API_BASE_URL + 'user', { headers: authHeader() });

    }

    getCandidatBoard() {

        return axios.get(Auth_API_BASE_URL + 'cand', { headers: authHeader() });
    }

    getAdminBoard() {
        return axios.get(Auth_API_BASE_URL + 'admin', { headers: authHeader() });
    }
}
export default new UserService();