import React, { Component } from 'react';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import FormationServ from '../../Services/FormationServ';

const required = value => {
    if (!value) {
        return (
            <div className='alert alert-danger' role="alert">
                this field is required!
            </div>
        );
    }
};
const vNiveau = value => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className='alert alert-danger' role="alert">
                this  nom must be between  6 and 40 characters.           </div>
        );
    }
};

class updateFormation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            niveauActuel: '',
            diplome: '',
            universite: '',
            lieu: '',
            dateDebut: '',
            dateFin: '',
        }
        this.changeNiveauHandler = this.changeNiveauHandler.bind(this);
        this.changeDiplomeHandler = this.changeDiplomeHandler.bind(this);
        this.changeUniversiteHandler = this.changeUniversiteHandler.bind(this);
        this.changeLieuHandler = this.changeLieuHandler.bind(this);
        this.changeDateDebutHandler = this.changeDateDebutHandler.bind(this);
        this.changeDateFinHandler = this.changeDateFinHandler.bind(this);
        this.updateFormation = this.updateFormation.bind(this);
    }
    changeUniversiteHandler = (event) => {
        this.setState({ universite: event.target.value });
    }
    changeNiveauHandler = (event) => {
        this.setState({ niveauActuel: event.target.value });
    }
    changeDiplomeHandler = (event) => {
        this.setState({ diplome: event.target.value });
    }
    changeLieuHandler = (event) => {
        this.setState({ lieu: event.target.value });
    }
    changeDateDebutHandler = (event) => {
        this.setState({ dateDebut: event.target.value });

    }
    changeDateFinHandler = (event) => {
        this.setState({ dateFin: event.target.value });
    }
    componentDidMount() {
        FormationServ.getById(this.state.id).then((res) => {
            let formation = res.data;
            this.setState({
                id: formation.id,
                niveauActuel: this.state.niveauActuel,
                diplome: this.state.diplome,
                universite: this.state.universite,
                lieu: this.state.lieu,
                dateDebut: this.state.dateDebut,
                dateFin: this.state.dateFin,
            });
        });
    }
    updateFormation = (e) => {
        e.preventDefault();
        let formation = {
            id: this.state.id,
            niveauActuel: this.state.niveauActuel,
            diplome: this.state.diplome,
            universite: this.state.universite,
            lieu: this.state.lieu,
            dateDebut: this.state.dateDebut,
            dateFin: this.state.dateFin,
        };
        console.log('formation => ' + JSON.stringify(formation));
        FormationServ.update(formation).then(res => {
            this.props.history.push('/formations');
        });
    }
    cancel() {
        this.props.history.push("/formations");
    }
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h1 className="text-center">update formation</h1>
                            <div className='card-body'>
                                <Form
                                    onSubmit={this.updateFormation}
                                    ref={(c) => {
                                        this.form = c;
                                    }}
                                >
                                    <div className='form-group'>
                                        <label> Niveau Actuel:</label>
                                        <Input placeholder='Niveau'
                                            name='Niveau' className='form-control'
                                            value={this.state.niveauActuel}
                                            onChange={this.changeNiveauHandler}
                                            validations={[required, vNiveau]} />

                                    </div>
                                    <br />
                                    <div className='form-group'>
                                        <label>Diplome:</label>
                                        <select value={this.state.diplome} validations={[required]} onChange={this.changeDiplomeHandler}>
                                            <option value="Baccaleaureat">Baccaleaureat</option>
                                            <option value="Licence">Licence</option>
                                            <option value="Master">Licence</option>
                                            <option value="Doctorat">Licence</option>
                                            <option value="Ingenieurie">Licence</option>
                                        </select>
                                    </div>
                                    <div className='form-group'>
                                        <label>  Universite:</label>
                                        <Input placeholder='Universite'
                                            name='Universite' className='form-control'
                                            value={this.state.universite}
                                            onChange={this.changeUniversiteHandler}
                                            validations={[required]} />
                                    </div>
                                    <div className='form-group'>
                                        <label>  Lieu:</label>
                                        <Input placeholder='Lieu'
                                            name='Lieu' className='form-control'
                                            value={this.state.lieu}
                                            onChange={this.changeLieuHandler} validations={[required]} />
                                    </div>
                                    <div className='form-group'>
                                        <label>  Date Debut:</label>
                                        <Input placeholder='Debut'
                                            name='Debut' className='form-control' type="date"
                                            value={this.state.dateDebut}
                                            onChange={this.changeDateDebutHandler}
                                            validations={[required]} />
                                    </div>
                                    <div className='form-group'>
                                        <label>  Date Fin:</label>
                                        <Input placeholder='Fin' name='Fin'
                                            type="date"
                                            className='form-control'
                                            value={this.state.dateFin}
                                            onChange={this.changeDateFinHandler}
                                            validations={[required]} />
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

export default updateFormation;