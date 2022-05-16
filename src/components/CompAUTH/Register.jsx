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
const vNom = value => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className='alert alert-danger' role="alert">
                this  nom must be between  6 and 40 characters.           </div>
        );
    }
};

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nom: "",
            login: '',
            email: '',
            password: '',
            role: '',
            successful: false,
            message: ""
        }


        this.changeNomHandler = this.changeNomHandler.bind(this);
        this.changeLoginHandler = this.changeLoginHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.handelRegister = this.handelRegister.bind(this);


    }





    //will get called this event  and where i will extract a value from this input field from the event and we use set state method to add the value to the cin and now we can able to see the value of the cin inside input text field  

    changeLoginHandler = (event) => {
        this.setState({ login: event.target.value });
    }
    changeNomHandler = (event) => {
        this.setState({ nom: event.target.value });
    }
    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });

    }

    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }

    handelRegister = (e) => {
        e.preventDefault();
        this.setState({
            message: "",
            successful: false
        });

        this.form.validateAll();

        RegisterService.register(
            this.state.login,
            this.state.email,
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
                                        <label>Login:</label>
                                        <Input placeholder='Login' name='Login' className='form-control' value={this.state.login} onChange={this.changeLoginHandler} validations={[required, vlogin]} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Email:</label>
                                        <Input placeholder='Email' name='Email' className='form-control' value={this.state.email} onChange={this.changeEmailHandler} validations={[required, email]} />
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

export default Register;