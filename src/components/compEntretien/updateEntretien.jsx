import React, { Component } from 'react';
import EntretienServ from '../../Services/EntretienServ';
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
const vTitre = value => {
    if (value.length < 3 || value.length > 40) {
        return (
            <div className='alert alert-danger' role="alert">
                this  nom must be between  6 and 40 characters.           </div>
        );
    }
};
const Vdescription = value => {
    if (value.length < 10 || value.length > 500) {
        return (
            <div className='alert alert-danger' role="alert">
                this  nom must be between  6 and 40 characters.           </div>
        );
    }
};
class updateEntretien extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            titre_entretien: '',
            lieu_entretien: '',
            description: '',
            email: '',
            date_entretien: '',
            temps_debut: '',
            temps_fin: '',
        }
        this.changeTitreHandler = this.changeTitreHandler.bind(this);
        this.changeLieuHandler = this.changeLieuHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeDateHandler = this.changeDateHandler.bind(this);
        this.changeDebutHandler = this.changeDebutHandler.bind(this);
        this.changeFinHandler = this.changeFinHandler.bind(this);
        this.updateEntretien = this.updateEntretien.bind(this);
    }
    componentDidMount() {
        EntretienServ.getEntretienById(this.state.id).then((res) => {
            let entretien = res.data;
            this.setState({
                id: entretien.id,
                titre_entretien: this.state.titre_entretien,
                lieu_entretien: this.state.lieu_entretien,
                description: this.state.description,
                email: this.state.email,
                date_entretien: this.state.date_entretien,
                temps_debut: this.state.temps_debut,
                temps_fin: this.state.temps_fin
            });
        });
    }
    updateEntretien = (e) => {
        e.preventDefault();
        let entretien = {
            id: this.state.id,
            titre_entretien: this.state.titre_entretien,
            lieu_entretien: this.state.lieu_entretien,
            description: this.state.description,
            email: this.state.email,
            date_entretien: this.state.date_entretien,
            temps_debut: this.state.temps_debut,
            temps_fin: this.state.temps_fin
        };
        console.log('entretien => ' + JSON.stringify(entretien));
        EntretienServ.updateEntretien(entretien).then(res => {
            this.props.history.push('/entretiens');
        });
    }
    cancel() {
        this.props.history.push("/entretiens");
    }
    changeLieuHandler = (event) => {
        this.setState({ lieu_entretien: event.target.value });
    }
    changeDescriptionHandler = (event) => {
        this.setState({ description: event.target.value });
    }
    changeDateHandler = (event) => {
        this.setState({ date_entretien: event.target.value });
    }
    changeDebutHandler = (event) => {
        this.setState({ temps_debut: event.target.value });
    }
    changeFinHandler = (event) => {
        this.setState({ temps_fin: event.target.value });
    }
    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }
    changeTitreHandler = (event) => {
        this.setState({ titre_entretien: event.target.value });
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h1 className="text-center">Update Entretien</h1>
                            <div className='card-body'>
                                <Form
                                    onSubmit={this.updateEntretien}
                                    ref={(c) => {
                                        this.form = c;
                                    }}
                                >
                                    <div className='form-group'>
                                        <label> titre :</label>
                                        <Input placeholder='Poste'
                                            name='Poste' className='form-control'
                                            value={this.state.titre_entretien}
                                            onChange={this.changeTitreHandler}
                                            validations={[required, vTitre]} />
                                    </div>
                                    <div className='form-group'>
                                        <label> lieu :</label>
                                        <Input placeholder='Lieu'
                                            name='Lieu' className='form-control'
                                            value={this.state.lieu_entretien}
                                            onChange={this.changeLieuHandler}
                                            validations={[required]} />
                                    </div>
                                    <div className='form-group'>
                                        <label> Description:</label>
                                        <Input placeholder=''
                                            name='Description' className='form-control'
                                            value={this.state.description}
                                            onChange={this.changeDescriptionHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Email:</label>
                                        <Input placeholder='Email'
                                            name='Email' className='form-control'
                                            value={this.state.email}
                                            onChange={this.changeEmailHandler} validations={[required, email]} />
                                    </div>
                                    <div className='form-group'>
                                        <label>  Date Entretien:</label>
                                        <Input placeholder='Date'
                                            type="Date"
                                            name='Date' className='form-control'
                                            value={this.state.date_entretien}
                                            onChange={this.changeDateHandler}
                                            validations={[required]} />
                                    </div>
                                    <div className='form-group'>
                                        <label>  Temps Debut:</label>
                                        <Input placeholder='Debut'
                                            type="number"
                                            name='Debut' className='form-control'
                                            value={this.state.temps_debut}
                                            onChange={this.changeDebutHandler}
                                            validations={[required]} />
                                    </div>
                                    <div className='form-group'>
                                        <label>  Temps Fin:</label>
                                        <Input placeholder='Fin' name='Fin'
                                            type="number"
                                            className='form-control'
                                            value={this.state.temps_fin}
                                            onChange={this.changeFinHandler}
                                            validations={[required]} />
                                    </div>

                                    <button className='btn btn-success'>Update</button>

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

export default updateEntretien;