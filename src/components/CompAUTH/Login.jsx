import React, { Component } from 'react';
import RegisterService from '../../Services/RegisterService';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
const required = value => {
    if (!value) {
        return (
            <div className='alert alert-danger' role="alert">
                this field is required!
            </div>
        );
    }
};
class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            login: '',
            password: '',
            loading: false,
            message: ""
        }

        this.changeLoginHandler = this.changeLoginHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.handelLogin = this.handelLogin.bind(this);

    }


    handelLogin = (e) => {
        e.preventDefault();
        this.setState({
            message: "",
            loading: true
        });
        this.form.validateAll();

        RegisterService.LogIn(
            this.state.login,
            this.state.password).then(
                () => {
                    this.props.history.push("/profile");
                    window.location.reload();

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
    //will get called this event  and where i will extract a value from this input field from the event and we use set state method to add the value to the cin and now we can able to see the value of the cin inside input text field  


    changeLoginHandler = (event) => {
        this.setState({ login: event.target.value });
    }
    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }


    render() {
        return (
            <div>

                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h1 className="text-center">Sign In</h1>
                            <div className='card-body'>
                                <Form
                                    onSubmit={this.handelLogin}
                                    ref={(c) => {
                                        this.form = c;
                                    }}
                                >

                                    <div className='form-group'>
                                        <label>Login:</label>
                                        <Input placeholder='Login'
                                            name='Login' className='form-control'
                                            value={this.state.login}
                                            onChange={this.changeLoginHandler}
                                            validations={[required]} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Password:</label>
                                        <Input placeholder='Password'
                                            type="password"
                                            name='Password' className='form-control'
                                            value={this.state.password}
                                            onChange={this.changePasswordHandler}
                                            validations={[required]} />
                                    </div>
                                    <div
                                        className='btn btn-primary btn-block'>
                                        <button
                                            className='btn btn-success' disabled={this.state.loading}>
                                            <span>
                                                login</span> </button>
                                    </div>
                                    {this.state.message && (
                                        <div className="form-group">
                                            <div
                                                className="alert alert-danger"

                                                role="alert"
                                            >
                                                {this.state.message}
                                            </div>
                                        </div>
                                    )}
                                    <CheckButton
                                        style={{ display: "none" }}
                                        ref={
                                            c => {
                                                this.checkBtn = c;
                                            }}
                                    ></CheckButton>
                                    <div><a href='http://localhost:3000/forgetPassword' className='navbar-brand' >forget Password</a>

                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        );
    }
}

export default Login;