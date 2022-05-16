import React, { Component } from 'react';
import emailServ from '../../Services/emailServ';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
class email extends Component {
    constructor(props) {
        super(props);

        this.state = {
            destinatiare: '',
            objet: '',
            messages: '',
            successful: false,
            message: ""
        }
        this.changeDestinataireHandler = this.changeDestinataireHandler.bind(this);
        this.changeObjetHandler = this.changeObjetHandler.bind(this);
        this.changeMessageHandler = this.changeMessageHandler.bind(this);
        this.handelRegister = this.handelRegister.bind(this);

    }
    changeDestinataireHandler = (event) => {
        this.setState({ destinatiare: event.target.value });
    }
    changeObjetHandler = (event) => {
        this.setState({ objet: event.target.value });
    }
    changeMessageHandler = (event) => {
        this.setState({ messages: event.target.value });
    }
    handelRegister = (e) => {
        e.preventDefault();
        this.setState({
            message: "",
            successful: false

        });
        this.form.validateAll();
        emailServ.registerEmail(
            this.state.destinatiare,
            this.state.objet,
            this.state.messages,
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
                                        <label>Destinataire:</label>
                                        <Input placeholder='destinataire' name='destinataire' className='form-control' value={this.state.destinatiare} onChange={this.changeDestinataireHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Objet:</label>
                                        <Input placeholder='Objet' name='Objet' className='form-control' value={this.state.objet} onChange={this.changeObjetHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Message:</label>
                                        <Input placeholder='Message' name='Message' className='form-control' value={this.state.messages} onChange={this.changeMessageHandler} />
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

export default email;
