
import { Button } from 'bootstrap';
import React, { Component } from 'react';
import PersonneService from '../../Services/PersonneService';



class ListPersonneComponents extends Component {
    constructor(props) {
        super(props)

        this.state = {
            personnes: []
        }
        this.addPersonne = this.addPersonne.bind(this);
        this.editPersonne = this.editPersonne.bind(this);
        this.deletePersonne = this.deletePersonne.bind(this);
    }
    deletePersonne(id) {
        //rest api 
        PersonneService.deletePersonne(id).then(res => {
            this.setState({ personnes: this.state.personnes.filter(Personne => Personne.id !== id) });
        });
    }
    viewPersonne(id) {
        this.props.history.push(`/viewPersonne/${id}`);
    }
    editPersonne(id) {
        this.props.history.push(`/updatePersonee/${id}`);
    }

    //methode pour appele le button addPersonne
    addPersonne() {
        // cooresponding to this route we have configured a component called create personne component
        this.props.history.push("/addPersonnes");

    }
    componentDidMount() {
        PersonneService.getPersonnes().then((res) => {
            this.setState({ personnes: res.data });
        });
    }
    render() {
        return (
            <div>
                <h1 className="text-center">Personne List</h1>


                <button className="btn btn-primary" onClick={this.addPersonne}
                    style={{ marginRight: "20px" }}> Add Personne</button>

                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>CIN</th>
                                <th>NOM</th>
                                <th>PRENOM</th>
                                <th>EMAIL</th>
                                <th>NUMERO</th>
                                <th>EtatCivil</th>
                                <th>Login</th>
                                <th>Password</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.personnes.map(
                                    Personne =>
                                        <tr key={Personne.id}>
                                            <td> {Personne.cin} </td>
                                            <td> {Personne.nom} </td>
                                            <td> {Personne.prenom} </td>
                                            <td> {Personne.email} </td>
                                            <td> {Personne.numeroTelephone} </td>
                                            <td> {Personne.etatCivil} </td>
                                            <td> {Personne.login} </td>
                                            <td> {Personne.password} </td>
                                            <td>
                                                <button onClick={() => this.editPersonne(Personne.id)}
                                                    className="btn btn-info">Update</button>
                                                <button style={{ marginLeft: "10px" }} onClick={() =>
                                                    this.deletePersonne(Personne.id)}
                                                    className="btn btn-danger">Delete</button>
                                                <button style={{ marginLeft: "10px" }}
                                                    onClick={() => this.viewPersonne(Personne.id)}
                                                    className="btn btn-info">View</button>
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

export default ListPersonneComponents
