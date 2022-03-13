import axios from 'axios';
const PERSONNE_API_BASE_URL = "http://localhost:9091/personne/Api/personnes";

class PersonneService {
    getPersonnes() {
        return axios.get(PERSONNE_API_BASE_URL);
    }
    createPersonne(personnee) {
        return axios.post(PERSONNE_API_BASE_URL, personnee);
    }
    getPersonneById(personneId) {
        return axios.get(PERSONNE_API_BASE_URL + '/' + personneId);
    }
    deletePersonne(personneId) {
        return axios.delete(PERSONNE_API_BASE_URL + '/' + personneId);
    }
    updatePersonne(personnee) {
        return axios.put(PERSONNE_API_BASE_URL, personnee);
    }

}
export default new PersonneService();