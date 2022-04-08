import React, { Component } from 'react';
import PersonneService from '../../Services/PersonneService';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from 'react-validation/build/button';
class UpdatePersonne extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            cin: '',
            nom: '',
            prenom: '',
            email: '',
            etatCivil: '',
            numeroTelephone: '',
            login: '',
            password: ''
        }
        this.changeCinHandler = this.changeCinHandler.bind(this);
        this.changeNomHandler = this.changeNomHandler.bind(this);
        this.changePrenomHandler = this.changePrenomHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeEtatCivilHandler = this.changeEtatCivilHandler.bind(this);
        this.changeNumeroTelephoneHandler = this.changeNumeroTelephoneHandler.bind(this);
        this.changeLoginHandler = this.changeLoginHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.updatePersonne = this.updatePersonne.bind(this);


    }
    componentDidMount() {
        PersonneService.getPersonneById(this.state.id).then((res) => {
            let personne = res.data;
            this.setState({
                cin: personne.cin, nom: this.state.nom, prenom: this.state.prenom,
                email: this.state.email,
                etatCivil: this.state.etatCivil, numeroTelephone: this.state.numeroTelephone,
                Login: this.state.login, password: this.state.password
            });
        });
    }
    updatePersonne = (e) => {
        e.preventDefault();
        let personne = {
            id: this.state.id,
            cin: this.state.cin, nom: this.state.nom, prenom: this.state.prenom,
            email: this.state.email,
            etatCivil: this.state.etatCivil, numeroTelephone: this.state.numeroTelephone,
            login: this.state.login, password: this.state.password

        };
        console.log('personne => ' + JSON.stringify(personne));
        PersonneService.updatePersonne(personne).then(res => {
            this.props.history.push('/personnes');
        });
    }
    cancel() {
        this.props.history.push("/personnes");
    }
    //will get called this event  and where i will extract a value from this input field from the event and we use set state method to add the value to the cin and now we can able to see the value of the cin inside input text field  
    changeCinHandler = (event) => {
        this.setState({ cin: event.target.value });
    }
    changeNomHandler = (event) => {
        this.setState({ nom: event.target.value });
    }
    changePrenomHandler = (event) => {
        this.setState({ prenom: event.target.value });
    }
    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });

    }
    changeEtatCivilHandler =
        (event) => {
            this.setState({ etatCivil: event.target.value });
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


    render() {
        return (
            <div>

                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>

                            <h1 className="text-center">Update</h1>
                            <div className='card-body'>
                                <Form
                                    onSubmit={this.updatePersonne}
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
                                        <Input placeholder='Email' name='Email' className='form-control' value={this.state.email} onChange={this.changeEmailHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>EtatCivil:</label>
                                        <Input placeholder='EtatCivil' name='EtatCivil' className='form-control' value={this.state.etatCivil} onChange={this.changeEtatCivilHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>NumeroTelephone:</label>
                                        <Input placeholder='NumeroTelephone' name='NumeroTelephone' className='form-control' value={this.state.numeroTelephone} onChange={this.changeNumeroTelephoneHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Login:</label>
                                        <Input placeholder='Login' name='Login' className='form-control' value={this.state.login} onChange={this.changeLoginHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Password:</label>
                                        <Input placeholder='Password' name='Password' className='form-control' value={this.state.password} onChange={this.changePasswordHandler} />
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
export default UpdatePersonne;