import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";
import HomeComponents from "./components/HomeComponents";
import BoardUser from "./components/boardUser";
import CandidatBoard from "./components/CandidatBoard";
import RegisterService from "./Services/RegisterService";
import ListPersonneComponents from "./components/ListPersonneComponents";
import CreatePersonne from "./components/CreatePersonne";
import UpdatePersonne from "./components/UpdatePersonne";
import HeaderComponents from './components/HeaderComponents';
import FooterComponents from './components/FooterComponents';
import profile from "./components/profile";




class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showCandidatBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = RegisterService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showCandidatBoard: user.roles.includes("ROLE_CANDIDAT"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }


  }


  logOut() {
    RegisterService.logout();
    this.setState({
      showCandidatBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {


    return (
      <div>

        <HeaderComponents />

        <div>
          <Router>

            <div className="container mt-3">
              <Switch>
                <Route exact path="/" component={ListPersonneComponents}> </Route>
                <Route path="/personnes" component={ListPersonneComponents}></Route>
                <Route path="/addPersonnes" component={CreatePersonne}></Route>
                <Route path="/updatePersonee/:id" component={UpdatePersonne}></Route>
                <Route path="/signIn" component={Login}></Route>
                <Route path="/signUp" component={Register}></Route>
                <Route path="/profile" component={profile}></Route>


              </Switch>
            </div>


          </Router>

        </div >
        <FooterComponents />
      </div>
    );
  }
}

export default App;