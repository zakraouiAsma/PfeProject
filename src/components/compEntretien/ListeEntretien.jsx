import React, { Component } from 'react';
import EntretienServ from '../../Services/EntretienServ';

class ListeEntretien extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Entretiens: []
        }
        this.addEntretien = this.addEntretien.bind(this);
        this.editeEntretien = this.editeEntretien.bind(this);
        this.deleteEntretien = this.deleteEntretien.bind(this);
    }
    deleteEntretien(id) {
        //rest api 
        EntretienServ.deleteEntretien(id).then(res => {
            this.setState({ Entretien: this.state.Entretiens.filter(Entretien => Entretien.id !== id) });
        });
    }
    editeEntretien(id) {
        this.props.history.push(`/updateEntretien/${id}`);
    }

    //methode pour appele le button addPersonne
    addEntretien() {
        // cooresponding to this route we have configured a component called create personne component
        this.props.history.push("/addEntretien");

    }
    componentDidMount() {
        EntretienServ.getEntretien().then((res) => {
            this.setState({ Entretiens: res.data });
        });
    }
    render() {
        return (
            <div>
                <h1 className="text-center">Entretien List</h1>


                <button className="btn btn-primary"
                    onClick={this.addEntretien}
                    style={{ marginRight: "20px" }}> ADD Entretien</button>

                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Titre</th>
                                <th>Lieu</th>
                                <th>Description</th>
                                <th>Email</th>
                                <th>Date d'Entretien</th>
                                <th>Temps Debut</th>
                                <th>Temps Fin</th>
                                <th> Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.Entretiens.map(
                                    Entretien =>
                                        <tr key={Entretien.id}>
                                            <td> {Entretien.titre_entretien} </td>
                                            <td> {Entretien.lieu_entretien} </td>
                                            <td> {Entretien.description} </td>
                                            <td> {Entretien.email} </td>
                                            <td> {Entretien.date_entretien} </td>
                                            <td> {Entretien.temps_debut} </td>
                                            <td> {Entretien.temps_fin} </td>
                                            <td>
                                                <button onClick={() => this.editeEntretien(Entretien.id)} className="btn btn-info">Update</button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteEntretien(Entretien.id)} className="btn btn-danger">Delete</button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewOffre(Entretien.id)} className="btn btn-info">View</button>
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

export default ListeEntretien;