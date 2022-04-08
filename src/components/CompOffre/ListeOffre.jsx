import React, { Component } from 'react';
import OffreService from '../../Services/OffreService';

class ListeOffre extends Component {
    constructor(props) {
        super(props)

        this.state = {
            offres: []
        }
        this.addOffre = this.addOffre.bind(this);
        this.editeOffre = this.editeOffre.bind(this);
        this.deleteOffre = this.deleteOffre.bind(this);
    }
    deleteOffre(id) {
        //rest api 
        OffreService.deleteOffre(id).then(res => {
            this.setState({ offres: this.state.deleteOffre.filter(Offre => Offre.id !== id) });
        });
    }
    editeOffre(id) {
        this.props.history.push(`/updateOffre/${id}`);
    }

    //methode pour appele le button addPersonne
    addOffre() {
        // cooresponding to this route we have configured a component called create personne component
        this.props.history.push("/addOffre");

    }
    componentDidMount() {
        OffreService.getOffre().then((res) => {
            this.setState({ offres: res.data });
        });
    }
    render() {
        return (
            <div>
                <h1 className="text-center">Offre List</h1>


                <button className="btn btn-primary" onClick={this.addOffre} style={{ marginRight: "20px" }}> ADD OFFRE</button>

                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Titre</th>
                                <th>Description</th>
                                <th>Nombre De Poste</th>
                                <th>Type</th>
                                <th>Adresse</th>
                                <th>Salaire</th>
                                <th>Niveau</th>
                                <th>Genre</th>
                                <th>Langue</th>
                                <th>Experience</th>
                                <th>Categorie</th>
                                <th>Mot Cles</th>
                                <th>Date d'Ajout</th>
                                <th>Date d'expiration</th>
                                <th>Image</th>
                                <th> Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.offres.map(
                                    Offre =>
                                        <tr key={Offre.id}>
                                            <td> {Offre.titre} </td>
                                            <td> {Offre.description} </td>
                                            <td> {Offre.nombre_Poste} </td>
                                            <td> {Offre.type} </td>
                                            <td> {Offre.adresse} </td>
                                            <td> {Offre.salaire} </td>
                                            <td> {Offre.niveau} </td>
                                            <td> {Offre.genre} </td>
                                            <td> {Offre.langue} </td>
                                            <td> {Offre.experience} </td>
                                            <td> {Offre.categorie} </td>
                                            <td> {Offre.motCles} </td>
                                            <td> {Offre.date_ajout} </td>
                                            <td> {Offre.date_expiration} </td>
                                            <td> {Offre.image} </td>
                                            <td>
                                                <button onClick={() => this.editeOffre(Offre.id)} className="btn btn-info">Update</button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteOffre(Offre.id)} className="btn btn-danger">Delete</button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewOffre(Offre.id)} className="btn btn-info">View</button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListeOffre;