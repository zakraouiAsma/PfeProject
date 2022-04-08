import React, { Component } from 'react';
import OffreService from '../../Services/OffreService';
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
class Offre extends Component {
    constructor(props) {
        super(props);

        this.state = {
            titre: '',
            description: '',
            nombre_Poste: '',
            type: '',
            adresse: '',
            salaire: '',
            niveau: '',
            genre: '',
            langue: '',
            experience: '',
            categorie: '',
            motCles: '',
            date_ajout: '',
            date_expiration: '',
            image: '',
            successful: false,
            message: ""

        }
        this.changeTitreHandler = this.changeTitreHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeNombrePosteHandler = this.changeNombrePosteHandler.bind(this);
        this.changeTypeHandler = this.changeTypeHandler.bind(this);
        this.changeAdresseHandler = this.changeAdresseHandler.bind(this);
        this.changeSalaireHandler = this.changeSalaireHandler.bind(this);
        this.changeNiveauHandler = this.changeNiveauHandler.bind(this);
        this.changeGenreHandler = this.changeGenreHandler.bind(this);
        this.changeLangueHandler = this.changeLangueHandler.bind(this);
        this.changeExperienceHandler = this.changeExperienceHandler.bind(this);
        this.changeCategorieHandler = this.changeCategorieHandler.bind(this);
        this.changeMotClesHandler = this.changeMotClesHandler.bind(this);
        this.changeDateAjoutHandler = this.changeDateAjoutHandler.bind(this);
        this.changeDateExpirationHandler = this.changeDateExpirationHandler.bind(this);
        this.changeImageHandler = this.changeImageHandler.bind(this);
        this.handelRegister = this.handelRegister.bind(this);
    }


    changeTitreHandler = (event) => {
        this.setState({ titre: event.target.value });
    }
    changeDescriptionHandler = (event) => {
        this.setState({ description: event.target.value });
    }
    changeNombrePosteHandler = (event) => {
        this.setState({ nombre_Poste: event.target.value });
    }
    changeTypeHandler = (event) => {
        this.setState({ type: event.target.value });
    }
    changeAdresseHandler = (event) => {
        this.setState({ adresse: event.target.value });
    }
    changeSalaireHandler = (event) => {
        this.setState({ salaire: event.target.value });
    }
    changeNiveauHandler = (event) => {
        this.setState({ niveau: event.target.value });
    }
    changeGenreHandler = (event) => {
        this.setState({ genre: event.target.value });
    }
    changeLangueHandler = (event) => {
        this.setState({ langue: event.target.value });
    }
    changeCategorieHandler = (event) => {
        this.setState({ categorie: event.target.value });
    }
    changeMotClesHandler = (event) => {
        this.setState({ motCles: event.target.value });
    }
    changeDateAjoutHandler = (event) => {
        this.setState({ date_ajout: event.target.value });
    }
    changeDateExpirationHandler = (event) => {
        this.setState({ date_expiration: event.target.value });
    }
    changeImageHandler = (event) => {
        this.setState({ image: event.target.value });
    }
    changeExperienceHandler = (event) => {
        this.setState({ experience: event.target.value });

    }
    handelRegister = (e) => {
        e.preventDefault();
        this.setState({
            message: "",
            successful: false
        });
        this.form.validateAll();
        OffreService.registerOffre(
            this.state.titre,
            this.state.description,
            this.state.nombre_Poste,
            this.state.type,
            this.state.adresse,
            this.state.salaire,
            this.state.niveau,
            this.state.genre,
            this.state.langue,
            this.state.experience,
            this.state.categorie,
            this.state.motCles,
            this.state.date_ajout,
            this.state.date_expiration,
            this.state.image,
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
                            <h1 className="text-center">Add Personne</h1>
                            <div className='card-body'>
                                <Form
                                    onSubmit={this.handelRegister}
                                    ref={(c) => {
                                        this.form = c;
                                    }}
                                >
                                    <div className='form-group'>
                                        <label>Titre:</label>
                                        <Input placeholder='Titre' name='Titre' className='form-control' value={this.state.titre} onChange={this.changeTitreHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Description:</label>
                                        <Input type='textera' placeholder='Description' name='Description' className='form-control' value={this.state.description} onChange={this.changeDescriptionHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Nombre de Poste:</label>
                                        <Input placeholder='NombrePoste' name='NombrePoste' className='form-control' value={this.state.nombre_Poste} onChange={this.changeNombrePosteHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Type offre:</label>
                                        <select value={this.state.type} onChange={this.changeTypeHandler}>
                                            <option value="Stage">Stage</option>
                                            <option value="Emploi">Emploi</option>

                                        </select>
                                    </div>
                                    <div className='form-group'>
                                        <label>Adresse:</label>
                                        <Input placeholder='adresse'

                                            name='adresse' className='form-control'
                                            value={this.state.adresse}
                                            onChange={this.changeAdresseHandler} validations={[required]} />
                                    </div>

                                    <div className='form-group'>
                                        <label>Salaire:</label>
                                        <Input placeholder='Salaire' name='Salaire' className='form-control' value={this.state.salaire} onChange={this.changeSalaireHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Niveau:</label>
                                        <select value={this.state.niveau} onChange={this.changeNiveauHandler}>
                                            <option value="Licence">Licence</option>
                                            <option value="Master">Master</option>
                                            <option value="Ingénieur">Ingénieur</option>
                                            <option value="Doctorat">Doctorat</option>
                                        </select>
                                    </div>
                                    <div className='form-group'>
                                        <label>Genre:</label>
                                        <select value={this.state.genre} onChange={this.changeGenreHandler}>
                                            <option value="CDD">CDD</option>
                                            <option value="CDI">CDI</option>
                                            <option value="CTT ">CTT </option>
                                            <option value="CUI ">CUI </option>
                                        </select>
                                    </div>
                                    <div className='form-group'>
                                        <label>Langue:</label>
                                        <select value={this.state.langue} onChange={this.changeLangueHandler}>
                                            <option value="Francais">Francais</option>
                                            <option value="Anglais">Anglais</option>
                                            <option value="Italien">Italien</option>
                                            <option value="Allemand">Allemand</option>
                                            <option value="Turki">Turki</option>
                                            <option value="العربية">العربية</option>
                                        </select>
                                    </div>
                                    <div className='form-group'>
                                        <label>Experience:</label>
                                        <Input placeholder='Langue' name='Langue' className='form-control' value={this.state.experience} onChange={this.changeExperienceHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Categorie:</label>
                                        <select value={this.state.langue} onChange={this.changeLangueHandler}>
                                            <option value="SIVP">SIVP</option>
                                            <option value="CSC">CSC</option>
                                            <option value="KARAMA">KARAMA</option>
                                            <option value="CIVP">CIVP</option>

                                        </select>
                                    </div>
                                    <div className='form-group'>
                                        <label>Mot Cles:</label>
                                        <Input placeholder='MotCles' name='MotCles' className='form-control' value={this.state.motCles} onChange={this.changeMotClesHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Date Ajout:</label>
                                        <Input type='date' placeholder='DateAjout' name='DateAjout' className='form-control' value={this.state.date_ajout} onChange={this.changeDateAjoutHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Date d'expiration:</label>
                                        <Input type='date' placeholder='DateExpiration' name='DateExpiration' className='form-control' value={this.state.date_expiration} onChange={this.changeDateExpirationHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Image:</label>
                                        <Input type="file"

                                            name='image' className='form-control'
                                            value={this.state.image}
                                            onChange={this.changeImageHandler} validations={[required]} />
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
                                    <CheckButton
                                        style={{ display: "none" }}
                                        ref={c => {
                                            this.checkBtn = c;
                                        }}
                                    />
                                </Form>
                                <br />

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Offre;