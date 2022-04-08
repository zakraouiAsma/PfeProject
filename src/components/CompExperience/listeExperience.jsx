import React, { Component } from 'react';
import ExperienceServ from '../../Services/ExperienceServ';

class listeExperience extends Component {
    constructor(props) {
        super(props)

        this.state = {
            experiences: []
        }
        this.addExperience = this.addExperience.bind(this);
        this.editExperience = this.editExperience.bind(this);
        this.deleteExperience = this.deleteExperience.bind(this);
    }
    deleteExperience(id) {
        //rest api 
        ExperienceServ.deleteExper(id).then(res => {
            this.setState({ experiences: this.state.experiences.filter(Experience => Experience.id !== id) });
        });
    }
    editExperience(id) {
        this.props.history.push(`/updateExperience/${id}`);
    }

    //methode pour appele le button addPersonne
    addExperience() {
        // cooresponding to this route we have configured a component called create personne component
        this.props.history.push("/addExperience");

    }
    componentDidMount() {
        ExperienceServ.getExperience().then((res) => {
            this.setState({ experiences: res.data });
        });
    }
    render() {
        return (
            <div>
                <h1 className="text-center">Experience List</h1>


                <button className="btn btn-primary" onClick={this.addExperience}
                    style={{ marginRight: "20px" }}> Add Experience</button>

                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Poste</th>
                                <th>Nom Societe</th>
                                <th>Années Experience</th>
                                <th>Date Debut</th>
                                <th>Date Fin</th>
                                <th> Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.experiences.map(
                                    Experience =>
                                        <tr key={Experience.id}>
                                            <td> {Experience.poste} </td>
                                            <td> {Experience.nomSociete} </td>
                                            <td> {Experience.annéesExperience} </td>
                                            <td> {Experience.dateDebut} </td>
                                            <td> {Experience.dateFin} </td>
                                            <td>
                                                <button onClick={() => this.editExperience(Experience.id)}
                                                    className="btn btn-info">Update</button>
                                                <button style={{ marginLeft: "10px" }} onClick={() =>
                                                    this.deleteExperience(Experience.id)}
                                                    className="btn btn-danger">Delete</button>
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

export default listeExperience;