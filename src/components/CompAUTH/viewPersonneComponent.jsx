import React, { Component } from 'react';

class viewPersonneComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id
        }
    }
    componentDidMount() {

    }
    render() {
        return (
            <div>
                <h2>wiew personne page</h2>
            </div>
        );
    }
}

export default viewPersonneComponent;