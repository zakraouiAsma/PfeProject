import React, { Component } from 'react';
import CandidatureServ from '../../Services/CandidatureServ';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

const email = value => {
    if (!isEmail(value)) {
        return (
            <div className='alert alert-danger' role="alert">
                this is not a valid email.
            </div>
        );
    }
};


const vNom = value => {
    if (value.length < 3 || value.length > 40) {
        return (
            <div className='alert alert-danger' role="alert">
                this  nom must be between  6 and 40 characters.           </div>
        );
    }
};
const vPrenom = value => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className='alert alert-danger' role="alert">
                this  nom must be between  6 and 40 characters.           </div>
        );
    }
};
const required = value => {
    if (!value) {
        return (
            <div className='alert alert-danger' role="alert">
                this field is required!
            </div>
        );
    }
};

class Candidature extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nom: '',
            prenom: '',
            email: '',
            lettre_motivation: '',
            cv: '',
            successful: false,
            message: ""
        }
        this.changeNomHandler = this.changeNomHandler.bind(this);
        this.changePrenomHandler = this.changePrenomHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeLettreHandler = this.changeLettreHandler.bind(this);
        this.changeCvHandler = this.changeCvHandler.bind(this);
        this.handelRegister = this.handelRegister.bind(this);
    }
    changeNomHandler = (event) => {
        this.setState({ nom: event.target.value });
    }
    changeLettreHandler = (event) => {
        this.setState({ lettre_motivation: event.target.value });
    }
    changeCvHandler = (event) => {
        this.setState({ cv: event.target.value });
    }
    changePrenomHandler = (event) => {
        this.setState({ prenom: event.target.value });

    }
    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });

    }
    handelRegister = (e) => {
        e.preventDefault();
        this.setState({
            message: "",
            successful: false
        });
        this.form.validateAll();
        CandidatureServ.registerCand(
            this.state.nom,
            this.state.prenom,
            this.state.email,
            this.state.lettre_motivation,
            this.state.cv,


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
                            <h1 className="text-center">Add candidature</h1>
                            <div className='card-body'>
                                <Form
                                    onSubmit={this.handelRegister}
                                    ref={(c) => {
                                        this.form = c;
                                    }}
                                >

                                    <div className='form-group'>
                                        <label>Nom:</label>
                                        <Input placeholder='Nom' name='Nom' className='form-control' value={this.state.nom} onChange={this.changeNomHandler} validations={[required, vNom]} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Prenom:</label>
                                        <Input placeholder='Prenom' name='Prenom' size="20" className='form-control' value={this.state.prenom} onChange={this.changePrenomHandler} validations={[required, vPrenom]} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Email:</label>
                                        <Input placeholder='Email' name='Email' className='form-control' value={this.state.email} onChange={this.changeEmailHandler} validations={[required, email]} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Lettre de Motivation:</label>
                                        <Input type="file"

                                            name='Lettre' className='form-control'
                                            value={this.state.lettre_motivation}
                                            onChange={this.changeLettreHandler} validations={[required]} />
                                    </div>
                                    <div className='form-group'>
                                        <label>CV:</label>
                                        <Input type="file"

                                            name='CV' className='form-control'
                                            value={this.state.cv}
                                            onChange={this.changeCvHandler} validations={[required]} />
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

export default Candidature;