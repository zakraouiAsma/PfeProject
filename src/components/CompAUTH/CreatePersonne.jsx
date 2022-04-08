import React, { Component } from 'react';
import PersonneService from '../../Services/PersonneService';
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
const vCin = value => {
    if (value.length < 8 || value.length > 8) {
        return (
            <div className='alert alert-danger' role="alert">
                this  cin must be 8 number .           </div>
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
const vPrenom = value => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className='alert alert-danger' role="alert">
                this  nom must be between  6 and 40 characters.           </div>
        );
    }
};
const vEtat = value => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className='alert alert-danger' role="alert">
                this  champs must be between  6 and 40 characters.           </div>
        );
    }
};
const vNumero = value => {
    if (value.length < 8 || value.length > 8) {
        return (
            <div className='alert alert-danger' role="alert">
                this  numero must be 8 characters.           </div>
        );
    }
};
class CreatePersonne extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            // id: this.props.match.params.id,
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
        this.savePersonne = this.savePersonne.bind(this);
        // this.saveOrUpdatePersonne = this.saveOrUpdatePersonne.bind(this);


    }
    /*
    
        // step 3
        componentDidMount() {
    
            // step 4
            if (this.state.id === '_add') {
                return
            } else {
                PersonneService.getPersonneById(this.state.id).then((res) => {
                    let personne = res.data;
                    this.setState({
                        cin: personne.cin, nom: this.state.nom, prenom: this.state.prenom,
                        age: this.state.age, email: this.state.email,
                        etatCivil: this.state.etatCivil, numeroTelephone: this.state.numeroTelephone,
                        Login: this.state.login, password: this.state.password
    
                    });
                });
            }
        }
        /*
            saveOrUpdatePersonne = (e) => {
                e.preventDefault();
                console.log(this.state.id);
                let personne = {
                    id: this.state.id,
                    cin: this.state.cin, nom: this.state.nom, prenom: this.state.prenom,
                    age: this.state.age, email: this.state.email,
                    etatCivil: this.state.etatCivil, numeroTelephone: this.state.numeroTelephone,
                    login: this.state.login, password: this.state.password
        
                };
                console.log('personne => ' + JSON.stringify(personne));
        
                // step 5
                if (this.state.id === '_add') {
                    PersonneService.createPersonne(personne).then(res => {
                        this.props.history.push('/personnes');
                    });
                } else {
                    PersonneService.updatePersonne(personne).then(res => {
                        this.props.history.push('/personnes');
                    });
                }
            }*/


    savePersonne = (e) => {
        e.preventDefault();
        let personne = {
            cin: this.state.cin, nom: this.state.nom, prenom: this.state.prenom,
            age: this.state.age, email: this.state.email,
            etatCivil: this.state.etatCivil, numeroTelephone: this.state.numeroTelephone,
            login: this.state.login, password: this.state.password

        };
        console.log('personne => ' + JSON.stringify(personne));
        PersonneService.createPersonne(personne).then(res => {
            this.props.history.push("/personnes");
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
    /*  getTitle() {
          if (this.state.id === '_add') {
              return <h1 className="text-center">Add Personne</h1>
          } else {
              return <h3 className="text-center">Update Personne</h3>
          }
      }*/

    render() {
        return (
            <div>

                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h1 className="text-center">Add Personne</h1>
                            <div className='card-body'>
                                <Form
                                    onSubmit={this.savePersonne}
                                    ref={(c) => {
                                        this.form = c;
                                    }}
                                >
                                    <div className='form-group'>
                                        <label>Cin:</label>
                                        <Input placeholder='CIN' name='CIN' size="8" className='form-control' value={this.state.cin} onChange={this.changeCinHandler} validations={[required, vCin]} />
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
                                        <label>EtatCivil:</label>
                                        <Input placeholder='EtatCivil' name='EtatCivil' className='form-control' value={this.state.etatCivil} onChange={this.changeEtatCivilHandler} validations={[required, vEtat]} />
                                    </div>
                                    <div className='form-group'>
                                        <label>NumeroTelephone:</label>
                                        <Input placeholder='NumeroTelephone' name='NumeroTelephone' className='form-control' value={this.state.numeroTelephone} onChange={this.changeNumeroTelephoneHandler} validations={[required, vNumero]} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Login:</label>
                                        <Input placeholder='Login' name='Login' className='form-control' value={this.state.login} onChange={this.changeLoginHandler} validations={[required, vlogin]} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Password:</label>
                                        <Input placeholder='Password' name='Password' className='form-control' value={this.state.password} onChange={this.changePasswordHandler} validations={[required, vpassword]} />
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

export default CreatePersonne;