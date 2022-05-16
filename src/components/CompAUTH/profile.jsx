import React, { Component } from 'react';
import RegisterService from '../../Services/RegisterService';
import { Redirect } from "react-router-dom";
class profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            /*redirect: null,
            userReady: false,
            currentUser: { login: "" }*/
        };


    }
    componentDidMount() {
        const currentUser = RegisterService.getCurrentUser();

        /*if (!currentUser) this.setState({ redirect: "/profile" });
        this.setState({ currentUser: currentUser, userReady: true })*/
    }

    render() {
        const { currentUser } = this.state;
        return (
            <div className='container'>
                {(this.state.userReady) ?
                    <div>
                        <header className='jumbotron'>
                            <h1>
                                <strong>{currentUser.login}</strong>
                                Profile </h1>
                        </header>
                        <p>
                            <strong>Token:</strong>{" "}
                            {currentUser.accessToken.substring(0, 20)} ...{" "}
                            {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}

                        </p>
                        <p>
                            <strong>Id:</strong>{" "}
                            {currentUser.id}

                        </p>
                        <p>
                            <strong>Email:</strong>{" "}
                            {currentUser.email}
                        </p>

                        <strong>Authorization:</strong>
                        <ul>
                            {currentUser.roles &&
                                currentUser.roles.map((role, index) =>
                                    <li key={index}>{role}

                                    </li>

                                )}

                        </ul>
                    </div> : null}
            </div>
        );
    }
}

export default profile;