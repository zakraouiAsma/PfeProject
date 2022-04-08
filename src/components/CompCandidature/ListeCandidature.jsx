import React, { Component } from 'react';
import CandidatureServ from '../../Services/CandidatureServ';

class ListeCandidature extends Component {
    constructor(props) {
        super(props);

        this.state = {
            candidatures: []
        }
        this.addcandidature = this.addcandidature.bind(this);
        this.editcandidatures = this.editcandidatures.bind(this);
        this.deletecandidatures = this.deletecandidatures.bind(this);
    }
    deletecandidatures(id) {
        //rest api 
        CandidatureServ.deleteCand(id).then(res => {
            this.setState({ candidatures: this.state.candidatures.filter(Candidature => Candidature.id !== id) });
        });
    }
    viewPersonne(id) {
        this.props.history.push(`/viewCandidatures/${id}`);
    }
    editcandidatures(id) {
        this.props.history.push(`/updateCandidatures/${id}`);
    }

    //methode pour appele le button addPersonne
    addcandidature() {
        // cooresponding to this route we have configured a component called create personne component
        this.props.history.push("/addCandidatures");

    }
    componentDidMount() {
        CandidatureServ.getCand().then((res) => {
            this.setState({ candidatures: res.data });
        });
    }
    render() {
        return (
            <div>
                <h1 className="text-center"> List Candidature </h1>


                <button className="btn btn-primary" onClick={this.addcandidature} style={{ marginRight: "20px" }}> Add candidature</button>

                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>NOM</th>
                                <th>PRENOM</th>
                                <th>EMAIL</th>
                                <th>LETTRE MOTIVATION</th>
                                <th>CV</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.candidatures.map(
                                    Candidature =>
                                        <tr key={Candidature.id}>
                                            <td> {Candidature.nom} </td>
                                            <td> {Candidature.prenom} </td>
                                            <td> {Candidature.email} </td>
                                            <td> {Candidature.lettre_motivation} </td>
                                            <td> {Candidature.cv} </td>

                                            <td>
                                                <button onClick={() => this.editcandidatures(Candidature.id)}
                                                    className="btn btn-info">Update</button>
                                                <button style={{ marginLeft: "10px" }} onClick={() =>
                                                    this.deletecandidatures(Candidature.id)}
                                                    className="btn btn-danger">Delete</button>
                                                <button style={{ marginLeft: "10px" }}
                                                    onClick={() => this.viewCandidatures(Candidature.id)}
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

export default ListeCandidature;