import React, { Component } from 'react';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import competenceServ from '../../Services/competenceServ';

const required = value => {
    if (!value) {
        return (
            <div className='alert alert-danger' role="alert">
                this field is required!
            </div>
        );
    }
};

class updateCompetence extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            langueParle: '',
            competence: '',
        }

        this.changeLangueHandler = this.changeLangueHandler.bind(this);
        this.changeCompetenceHandler = this.changeCompetenceHandler.bind(this);
        this.updateCompetence = this.updateCompetence.bind(this);
    }
    changeLangueHandler = (event) => {
        this.setState({ langueParle: event.target.value });
    }
    changeCompetenceHandler = (event) => {
        this.setState({ competence: event.target.value });
    }
    componentDidMount() {
        competenceServ.getById(this.state.id).then((res) => {
            let competences = res.data;
            this.setState({
                id: competences.id,
                langueParle: this.state.langueParle,
                competence: this.state.competence,
            });
        });
    }
    updateCompetence = (e) => {
        e.preventDefault();
        let competences = {
            id: this.state.id,
            langueParle: this.state.langueParle,
            competence: this.state.competence,
        };
        console.log('competences => ' + JSON.stringify(competences));
        competenceServ.update(competences).then(res => {
            this.props.history.push('/competences');
        });
    }
    cancel() {
        this.props.history.push("/competences");
    }
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h1 className="text-center">Update competence </h1>
                            <div className='card-body'>
                                <Form
                                    onSubmit={this.updateCompetence}
                                    ref={(c) => {
                                        this.form = c;
                                    }}
                                >
                                    <div className='form-group'>
                                        <label>langue Parle:</label>
                                        <Input placeholder='Langue' name='Langue' className='form-control' value={this.state.langueParle} onChange={this.changeLangueHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Competence:</label>
                                        <Input placeholder='Competence' name='Competence' className='form-control' value={this.state.competence} onChange={this.changeCompetenceHandler} />
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

export default updateCompetence;