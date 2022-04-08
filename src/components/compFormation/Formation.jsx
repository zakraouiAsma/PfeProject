import React, { Component } from 'react';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import FormationServ from '../../Services/FormationServ';
const required = value => {
    if (!value) {
        return (
            <div className='alert alert-danger' role="alert">
                this field is required!
            </div>
        );
    }
};
class Formation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            niveauActuel: '',
            diplome: '',
            universite: '',
            lieu: '',
            dateDebut: '',
            dateFin: '',
        }
        this.changeNiveauHandler = this.changeNiveauHandler.bind(this);
        this.changeDiplomeHandler = this.changeDiplomeHandler.bind(this);
        this.changeUniversiteHandler = this.changeUniversiteHandler.bind(this);
        this.changeLieuHandler = this.changeLieuHandler.bind(this);
        this.changeDateDebutHandler = this.changeDateDebutHandler.bind(this);
        this.changeDateFinHandler = this.changeDateFinHandler.bind(this);
        this.handelRegister = this.handelRegister.bind(this);
    }
    changeUniversiteHandler = (event) => {
        this.setState({ universite: event.target.value });
    }
    changeNiveauHandler = (event) => {
        this.setState({ niveauActuel: event.target.value });
    }
    changeDiplomeHandler = (event) => {
        this.setState({ diplome: event.target.value });
    }
    changeLieuHandler = (event) => {
        this.setState({ lieu: event.target.value });
    }
    changeDateDebutHandler = (event) => {
        this.setState({ dateDebut: event.target.value });

    }
    changeDateFinHandler = (event) => {
        this.setState({ dateFin: event.target.value });
    }
    handelRegister = (e) => {
        e.preventDefault();
        this.setState({
            message: "",
            successful: false
        });
        this.form.validateAll();
        FormationServ.register(
            this.state.niveauActuel,
            this.state.diplome,
            this.state.universite,
            this.state.lieu,
            this.state.dateDebut,
            this.state.dateFin,
        ).then(
            response => {
                this.setState({
                    message: response.data.message,
                    successful: true
                });

            },
            error => {
                const resMessage = (
                    error.response &&
                    error.response.data &&
                    error.response.data.message
                ) || error.message || error.toString();
                this.setState({
                    successful: false,
                    message: resMessage
                });
            }
        );

    }
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h1 className="text-center">Add Formation</h1>
                            <div className='card-body'>
                                <Form
                                    onSubmit={this.handelRegister}
                                    ref={(c) => {
                                        this.form = c;
                                    }}
                                >
                                    <div className='form-group'>
                                        <label> Niveau Actuel:</label>
                                        <Input placeholder='Niveau'
                                            name='Niveau' className='form-control'
                                            value={this.state.niveauActuel}
                                            onChange={this.changeNiveauHandler} />
                                    </div>
                                    <br />
                                    <div className='form-group'>
                                        <label>Diplome:</label>
                                        <select value={this.state.diplome} onChange={this.changeDiplomeHandler}>
                                            <option value="Baccaleaureat">Baccaleaureat</option>
                                            <option value="Licence">Licence</option>
                                            <option value="Master">Licence</option>
                                            <option value="Doctorat">Licence</option>
                                            <option value="Ingenieurie">Licence</option>
                                        </select>
                                    </div>
                                    <div className='form-group'>
                                        <label>  Universite:</label>
                                        <Input placeholder='Universite'
                                            name='Universite' className='form-control'
                                            value={this.state.universite}
                                            onChange={this.changeUniversiteHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>  Lieu:</label>
                                        <Input placeholder='Lieu'
                                            name='Lieu' className='form-control'
                                            value={this.state.lieu}
                                            onChange={this.changeLieuHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>  Date Debut:</label>
                                        <Input placeholder='Debut'
                                            name='Debut' className='form-control' type="date"
                                            value={this.state.dateDebut} onChange={this.changeDateDebutHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>  Date Fin:</label>
                                        <Input placeholder='Fin' name='Fin'
                                            type="date"
                                            className='form-control'
                                            value={this.state.dateFin}
                                            onChange={this.changeDateFinHandler} />
                                    </div>

                                    <button className='btn btn-success'>Save</button>

                                    <button className='btn btn-danger' style={{ marginLeft: "10px" }}>Cancel</button>
                                    {this.state.message && (
                                        <div className="form-group">
                                            <div
                                                className={
                                                    this.state.successful
                                                        ? "alert alert-success"
                                                        : "alert alert-danger"
                                                }
                                                role="alert"
                                            >
                                                {this.state.message}
                                            </div>
                                        </div>
                                    )}
                                </Form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Formation;