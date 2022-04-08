import React, { Component } from 'react';
import FormationServ from '../../Services/FormationServ';

class listeFormation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            formations: []
        }
        this.addFormation = this.addFormation.bind(this);
        this.editFormation = this.editFormation.bind(this);
        this.deleteFormation = this.deleteFormation.bind(this);
    }
    deleteFormation(id) {
        //rest api 
        FormationServ.delete(id).then(res => {
            this.setState({
                formations: this.state.formations.
                    filter(Formation => Formation.id !== id)
            });
        });
    }
    editFormation(id) {
        this.props.history.push(`/updateFormation/${id}`);
    }
    addFormation() {
        // cooresponding to this route we have configured a component called create personne component
        this.props.history.push("/addFormation");

    }
    componentDidMount() {
        FormationServ.get().then((res) => {
            this.setState({ formations: res.data });
        });
    }
    render() {
        return (
            <div>
                <h1 className="text-center">Formation List</h1>


                <button className="btn btn-primary" onClick={this.addFormation}
                    style={{ marginRight: "20px" }}> Add Formation</button>

                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Niveau Actuel</th>
                                <th>Diplome</th>
                                <th>Universite</th>
                                <th>Lieu</th>
                                <th>Date Debut</th>
                                <th>Date Fin</th>
                                <th> Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.formations.map(
                                    Formation =>
                                        <tr key={Formation.id}>
                                            <td> {Formation.niveauActuel} </td>
                                            <td> {Formation.diplome} </td>
                                            <td> {Formation.universite} </td>
                                            <td> {Formation.lieu} </td>
                                            <td> {Formation.dateDebut} </td>
                                            <td> {Formation.dateFin} </td>
                                            <td>
                                                <button onClick={() => this.editFormation(Formation.id)}
                                                    className="btn btn-info">Update</button>
                                                <button style={{ marginLeft: "10px" }} onClick={() =>
                                                    this.deleteFormation(Formation.id)}
                                                    className="btn btn-danger">Delete</button>
                                                <button style={{ marginLeft: "10px" }}
                                                    onClick={() => this.viewPersonne(Formation.id)}
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

export default listeFormation;