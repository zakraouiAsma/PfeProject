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

class updateCandidature extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
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
        this.updateCandidature = this.updateCandidature.bind(this);
        this.updateCandidature = this.updateCandidature.bind(this);
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
    changeIDHandler = (event) => {
        this.setState({ id: event.target.value });

    }
    componentDidMount() {
        CandidatureServ.getCandById(this.state.id).then((res) => {
            let candidature = res.data;
            this.setState({
                id: candidature.id,
                nom: this.state.nom, prenom: this.state.prenom,
                email: this.state.email,
                lettre_motivation: this.state.lettre_motivation,
                cv: this.state.cv,
            });
        });
    }
    updateCandidature = (e) => {
        e.preventDefault();
        let candidature = {
            id: this.state.id,
            nom: this.state.nom, prenom: this.state.prenom,
            email: this.state.email,
            lettre_motivation: this.state.lettre_motivation,
            cv: this.state.cv,
        };
        console.log('candidature => ' + JSON.stringify(candidature));
        CandidatureServ.updateCand(candidature).then(res => {
            this.props.history.push('/candidatures');
        });
    }
    cancel() {
        this.props.history.push("/candidatures");
    }
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h1 className="text-center">update candidature</h1>
                            <div className='card-body'>
                                <Form
                                    onSubmit={this.updateCandidature}
                                    ref={(c) => {
                                        this.form = c;
                                    }}
                                >
                                    <div className='form-group'>
                                        <label>ID:</label>
                                        <Input placeholder='ID' name='ID' className='form-control' value={this.state.id} onChange={this.changeIDHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Nom:</label>
                                        <Input placeholder='Nom' name='Nom' className='form-control' value={this.state.nom} onChange={this.changeNomHandler} validations={[required, vNom]} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Prenom:</label>
                                        <Input placeholder='Prenom' name='Prenom' className='form-control' value={this.state.prenom} onChange={this.changePrenomHandler} validations={[required, vPrenom]} />
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

export default updateCandidature;