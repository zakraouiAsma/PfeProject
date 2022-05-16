import React, { Component } from 'react';
import RegisterService from '../../Services/RegisterService';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
const required = value => {
    if (!value) {
        return (
            <div className='alert alert-danger' role="alert">
                this field is required!
            </div>
        );
    }
};
const email = value => {
    if (!isEmail(value)) {
        return (
            <div className='alert alert-danger' role="alert">
                this is not a valid email.
            </div>
        );
    }
};
const vpassword = value => {
    if (value.length < 6 || value.length > 15) {
        return (
            <div className='alert alert-danger' role="alert">
                this must  between  6 and 15 characters.           </div>
        );
    }
};
const vlogin = value => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className='alert alert-danger' role="alert">
                this  nom must be between  6 and 40 characters.           </div>
        );
    }
};
class RegisterClt extends Component {
    constructor(props) {
        super(props);

        this.state = {
            matriculeFiscale: '',
            nomSociete: '',
            raisonSociale: '',
            adresse: '',
            email: '',
            numeroTelephone: '',
            login: '',
            password: '',
            successful: false,
            message: ""
        }


        this.changeMatriculeFiscaleHandler = this.changeMatriculeFiscaleHandler.bind(this);
        this.changeNomSocieteHandler = this.changeNomSocieteHandler.bind(this);
        this.changeRaisonSocialeHandler = this.changeRaisonSocialeHandler.bind(this);
        this.changeAdresseHandler = this.changeAdresseHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeNumeroTelephoneHandler = this.changeNumeroTelephoneHandler.bind(this);
        this.changeLoginHandler = this.changeLoginHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.handelRegisterClient = this.handelRegisterClient.bind(this);
    }//will get called this event  and where i will extract a value from this input field from the event and we use set state method to add the value to the cin and now we can able to see the value of the cin inside input text field  
    changeMatriculeFiscaleHandler = (event) => {
        this.setState({ matriculeFiscale: event.target.value });
    }
    changeRaisonSocialeHandler = (event) => {
        this.setState({ raisonSociale: event.target.value });
    }
    changeNomSocieteHandler = (event) => {
        this.setState({ nomSociete: event.target.value });
    }
    changeAdresseHandler = (event) => {
        this.setState({ adresse: event.target.value });
    }


    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });

    }
    changeNumeroTelephoneHandler = (event) => {
        this.setState({ numeroTelephone: event.target.value });

    }
    changeLoginHandler = (event) => {
        this.setState({ login: event.target.value });
    }
    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }



    handelRegisterClient = (e) => {
        e.preventDefault();
        this.setState({
            message: "",
            successful: false
        });

        this.form.validateAll();

        RegisterService.registerClt(
            this.state.matriculeFiscale,
            this.state.raisonSociale,
            this.state.nomSociete,
            this.state.adresse,
            this.state.email,
            this.state.numeroTelephone,
            this.state.login,
            this.state.password
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
                            <h1 className="text-center">Register</h1>
                            <div className='card-body'>
                                <Form
                                    onSubmit={this.handelRegisterClient}
                                    ref={(c) => {
                                        this.form = c;
                                    }}
                                >
                                    <div className='form-group'>
                                        <label>matriculeFiscale:</label>
                                        <Input placeholder='matricule' name='matriicule' className='form-control' value={this.state.matriculeFiscale} onChange={this.changeMatriculeFiscaleHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>raison Sociale:</label>
                                        <Input placeholder='raison' name='raison' className='form-control'
                                            value={this.state.raisonSociale} onChange={this.changeRaisonSocialeHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Nom Societe:</label>
                                        <Input placeholder='Nom' name='Nom' className='form-control'
                                            value={this.state.nomSociete} onChange={this.changeNomSocieteHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Adresse:</label>
                                        <Input placeholder='adresse'

                                            name='adresse' className='form-control'
                                            value={this.state.adresse}
                                            onChange={this.changeAdresseHandler} validations={[required]} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Email:</label>
                                        <Input placeholder='Email' name='Email' className='form-control' value={this.state.email} onChange={this.changeEmailHandler} validations={[required, email]} />
                                    </div>
                                    <div className='form-group'>
                                        <label>NumeroTelephone:</label>
                                        <Input placeholder='NumeroTelephone' name='NumeroTelephone' className='form-control' value={this.state.numeroTelephone} onChange={this.changeNumeroTelephoneHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Login:</label>
                                        <Input placeholder='Login' name='Login' className='form-control' value={this.state.login} onChange={this.changeLoginHandler} validations={[required, vlogin]} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Password:</label>
                                        <Input placeholder='Password'
                                            type="password"
                                            name='Password' className='form-control'
                                            value={this.state.password}
                                            onChange={this.changePasswordHandler} validations={[required, vpassword]} />
                                    </div>
                                    <button className='btn btn-success'>Sign Up</button>

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
                                    <CheckButton
                                        style={{ display: "none" }}
                                        ref={c => {
                                            this.checkBtn = c;
                                        }}
                                    />
                                </Form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
export default RegisterClt;