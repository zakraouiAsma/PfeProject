import React, { Component } from 'react';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import ExperienceServ from '../../Services/ExperienceServ';

const required = value => {
    if (!value) {
        return (
            <div className='alert alert-danger' role="alert">
                this field is required!
            </div>
        );
    }
};
class updateExperience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            poste: '',
            nomSociete: '',
            annéesExperience: '',
            dateDebut: '',
            dateFin: '',
        }
        this.changePosteHandler = this.changePosteHandler.bind(this);
        this.changeNomSocieteHandler = this.changeNomSocieteHandler.bind(this);
        this.changeAnnéeHandler = this.changeAnnéeHandler.bind(this);
        this.changeDateDebutHandler = this.changeDateDebutHandler.bind(this);
        this.changeDateFinHandler = this.changeDateFinHandler.bind(this);
        this.updateExperience = this.updateExperience.bind(this);
    }
    changePosteHandler = (event) => {
        this.setState({ poste: event.target.value });

    }
    changeNomSocieteHandler = (event) => {
        this.setState({ nomSociete: event.target.value });
    }
    changeAnnéeHandler = (event) => {
        this.setState({ annéesExperience: event.target.value });
    }
    changeDateDebutHandler = (event) => {
        this.setState({ dateDebut: event.target.value });
    }
    changeDateFinHandler = (event) => {
        this.setState({ dateFin: event.target.value });
    }
    componentDidMount() {
        ExperienceServ.getExperById(this.state.id).then((res) => {
            let experience = res.data;
            this.setState({
                id: experience.id,
                poste: this.state.poste, nomSociete: this.state.nomSociete,
                annéesExperience: this.state.annéesExperience,
                dateDebut: this.state.dateDebut,
                dateFin: this.state.dateFin,
            });
        });
    }
    updateExperience = (e) => {
        e.preventDefault();
        let experience = {
            id: this.state.id,
            poste: this.state.poste, nomSociete: this.state.nomSociete,
            annéesExperience: this.state.annéesExperience,
            dateDebut: this.state.dateDebut,
            dateFin: this.state.dateFin,
        };
        console.log('experience => ' + JSON.stringify(experience));
        ExperienceServ.updateExper(experience).then(res => {
            this.props.history.push('/experiences');
        });
    }
    cancel() {
        this.props.history.push("/experiences");
    }
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h1 className="text-center">update Experience </h1>
                            <div className='card-body'>
                                <Form
                                    onSubmit={this.updateExperience}
                                    ref={(c) => {
                                        this.form = c;
                                    }}
                                >
                                    <div className='form-group'>
                                        <label> Poste occupé:</label>
                                        <Input placeholder='Poste'
                                            name='Poste' className='form-control'
                                            value={this.state.poste}
                                            onChange={this.changePosteHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label> Nom Societe:</label>
                                        <Input placeholder='Nom'
                                            name='Nom' className='form-control'
                                            value={this.state.nomSociete}
                                            onChange={this.changeNomSocieteHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label> Années D'experience:</label>
                                        <Input placeholder='Années' type='nomber'
                                            name='Années' className='form-control'
                                            value={this.state.annéesExperience}
                                            onChange={this.changeAnnéeHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>  Date Debut:</label>
                                        <Input placeholder='Debut' name='Debut' type="date"
                                            className='form-control'
                                            value={this.state.lieu}
                                            onChange={this.changeDateDebutHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>  Date Fin:</label>
                                        <Input placeholder='Fin' name='Fin' type="date"
                                            className='form-control'
                                            value={this.state.lieu}
                                            onChange={this.changeDateFinHandler} />
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

export default updateExperience;