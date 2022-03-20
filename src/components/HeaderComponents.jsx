import React, { Component } from 'react';

class HeaderComponents extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    render() {
        return (
            <div>
                <header>
                    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                        <div><a href='http://localhost:3000/personnes' className='navbar-brand' >Personne Recrutement</a>

                        </div>
                        <div><a href='http://localhost:3000/addPersonnes' className='navbar-brand' >Add</a>

                        </div>

                        <div><a href='http://localhost:3000/signUp' className='navbar-brand' >Register </a>

                        </div>
                        <div><a href='http://localhost:3000/signIn' className='navbar-brand' >Sign In</a>

                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponents;