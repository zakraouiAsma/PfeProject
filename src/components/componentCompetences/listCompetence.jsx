import React, { Component } from 'react';
import competenceServ from '../../Services/competenceServ';

class listCompetence extends Component {
    constructor(props) {
        super(props)

        this.state = {
            competences: []
        }
        this.addCompetences = this.addCompetences.bind(this);
        this.editCompetences = this.editCompetences.bind(this);
        this.deleteCompetences = this.deleteCompetences.bind(this);
    }
    deleteCompetences(id) {
        //rest api 
        competenceServ.delete(id).then(res => {
            this.setState({ competences: this.state.competences.filter(Competence => Competence.id !== id) });
        });
    }
    editCompetences(id) {
        this.props.history.push(`/updateCompetences/${id}`);
    }
    addCompetences() {
        // cooresponding to this route we have configured a component called create personne component
        this.props.history.push("/addCompetences");

    }
    componentDidMount() {
        competenceServ.get().then((res) => {
            this.setState({ competences: res.data });
        });
    }
    render() {
        return (
            <div>
                <h1 className="text-center">Personne List</h1>


                <button className="btn btn-primary" onClick={this.addCompetences}
                    style={{ marginRight: "20px" }}> Add competence</button>

                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Langue Parle</th>
                                <th>Competences</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.competences.map(
                                    Competence =>
                                        <tr key={Competence.id}>
                                            <td> {Competence.langueParle} </td>
                                            <td> {Competence.competence} </td>

                                            <td>
                                                <button onClick={() => this.editCompetences(Competence.id)}
                                                    className="btn btn-info">Update</button>
                                                <button style={{ marginLeft: "10px" }} onClick={() =>
                                                    this.deleteCompetences(Competence.id)}
                                                    className="btn btn-danger">Delete</button>
                                                <button style={{ marginLeft: "10px" }}
                                                    onClick={() => this.viewPersonne(Competence.id)}
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

export default listCompetence;