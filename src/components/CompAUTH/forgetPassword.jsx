import React, { Component } from 'react';
import RegisterService from '../../Services/RegisterService';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import PersonneService from '../../Services/PersonneService';
const required = value => {
    if (!value) {
        return (
            <div className='alert alert-danger' role="alert">
                this field is required!
            </div>
        );
    }
};
class forgetPassword extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',

            loading: false,
            message: ""
        }

        this.changeEmailHandler = this.changeEmailHandler.bind(this);

        this.handelForget = this.handelForget.bind(this);

    }


    handelForget = (e) => {
        e.preventDefault();
        this.setState({
            message: "",
            loading: true
        });
        this.form.validateAll();

        PersonneService.passwordCreate(
            this.state.email,
        ).then(
            () => {
                this.props.history.push("/forgotpassword");
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


    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
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
                                    onSubmit={this.handelForget}
                                    ref={(c) => {
                                        this.form = c;
                                    }}
                                >

                                    <div className='form-group'>
                                        <label>email:</label>
                                        <Input placeholder='Login'
                                            name='Login' className='form-control'
                                            value={this.state.email}
                                            onChange={this.changeEmailHandler}
                                            validations={[required]} />
                                    </div>

                                    <div
                                        className='btn btn-primary btn-block'>
                                        <button
                                            className='btn btn-success' disabled={this.state.loading}>
                                            <span>
                                                forget</span> </button>
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

                                </Form>
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        );
    }
}

export default forgetPassword;