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
class RegisterCandidat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cin: '',
            nom: '',
            prenom: '',
            email: '',
            numeroTelephone: '',
            etatCivil: '',
            login: '',
            date_Naissance: '',
            adresse: '',
            image: '',
            cv: '',
            password: '',
            successful: false,
            message: ""
        }

        this.changeCinHandler = this.changeCinHandler.bind(this);
        this.changeNomHandler = this.changeNomHandler.bind(this);
        this.changePrenomHandler = this.changePrenomHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeNumeroTelephoneHandler = this.changeNumeroTelephoneHandler.bind(this);
        this.changeEtatHandler = this.changeEtatHandler.bind(this);
        this.changeLoginHandler = this.changeLoginHandler.bind(this);
        this.changeDateHandler = this.changeDateHandler.bind(this);
        this.changeAdresseHandler = this.changeAdresseHandler.bind(this);
        this.changeImageHandler = this.changeImageHandler.bind(this);
        this.changeCvHandler = this.changeCvHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.handelRegisterClient = this.handelRegisterClient.bind(this);


    }


    changeEtatHandler = (event) => {
        this.setState({ etatCivil: event.target.value });
    }

    //will get called this event  and where i will extract a value from this input field from the event and we use set state method to add the value to the cin and now we can able to see the value of the cin inside input text field  
    changeNomHandler = (event) => {
        this.setState({ nom: event.target.value });
    }
    changeCinHandler = (event) => {
        this.setState({ cin: event.target.value });
    }
    changePrenomHandler = (event) => {
        this.setState({ prenom: event.target.value });
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
    changeDateHandler = (event) => {
        this.setState({ date_Naissance: event.target.value });
    }
    changeAdresseHandler = (event) => {
        this.setState({ adresse: event.target.value });
    }
    changeImageHandler = (event) => {
        this.setState({ image: event.target.value });
    }
    changeCvHandler = (event) => {
        this.setState({ cv: event.target.value });
    }
    handelRegisterClient = (e) => {
        e.preventDefault();
        this.setState({
            message: "",
            successful: false
        });

        this.form.validateAll();

        RegisterService.registerCandidat(
            this.state.cin,
            this.state.nom,
            this.state.prenom,
            this.state.email,
            this.state.numeroTelephone,
            this.state.etatCivil,
            this.state.login,
            this.state.date_Naissance,
            this.state.adresse,
            this.state.image,
            this.state.cv,
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
                                        <label>Cin:</label>
                                        <Input placeholder='CIN' name='CIN' className='form-control' value={this.state.cin} onChange={this.changeCinHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Nom:</label>
                                        <Input placeholder='Nom' name='Nom' className='form-control' value={this.state.nom} onChange={this.changeNomHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Prenom:</label>
                                        <Input placeholder='Prenom' name='Prenom' className='form-control' value={this.state.prenom} onChange={this.changePrenomHandler} />
                                    </div>

                                    <div className='form-group'>
                                        <label>Email:</label>
                                        <Input placeholder='Email' name='Email' className='form-control' value={this.state.email} onChange={this.changeEmailHandler} validations={[required, email]} />
                                    </div>
                                    <div className='form-group'>
                                        <label>NumeroTelephone:</label>
                                        <Input placeholder='NumeroTelephone' name='NumeroTelephone' className='form-control' value={this.state.numeroTelephone} onChange={this.changeNumeroTelephoneHandler} />
                                    </div>

                                    <select value={this.state.etatCivil} onChange={this.changeEtatHandler}>
                                        <option value="Célibataire">Célibataire</option>
                                        <option value="Marié">Marié</option>
                                        <option value="Divorcé">Divorcé</option>
                                    </select>

                                    <div className='form-group'>
                                        <label>Login:</label>
                                        <Input placeholder='Login' name='Login'
                                            className='form-control' value={this.state.login} onChange={this.changeLoginHandler} validations={[required, vlogin]} />
                                    </div>

                                    <div className='form-group'>
                                        <label>date Naissance:</label>
                                        <Input placeholder='date' name='date' type='date' className='form-control' value={this.state.date_Naissance} onChange={this.changeDateHandler} validations={[required]} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Adresse:</label>
                                        <Input placeholder='adresse'

                                            name='adresse' className='form-control'
                                            value={this.state.adresse}
                                            onChange={this.changeAdresseHandler} validations={[required]} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Image:</label>
                                        <Input type="file"

                                            name='image' className='form-control'
                                            value={this.state.image}
                                            onChange={this.changeImageHandler} validations={[required]} />
                                    </div>
                                    <div className='form-group'>
                                        <label>CV:</label>
                                        <Input type='file'

                                            name='cv' className='form-control'
                                            value={this.state.cv}
                                            onChange={this.changeCvHandler} validations={[required]} />
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


export default RegisterCandidat;