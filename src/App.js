import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/CompAUTH/Login";
import Register from "./components/CompAUTH/Register";
import HomeComponents from "./components/HomeComponents";
import CandidatBoard from "./components/CompAUTH/CandidatBoard";
import RegisterService from "./Services/RegisterService";
import ListPersonneComponents from "./components/CompAUTH/ListPersonneComponents";
import CreatePersonne from "./components/CompAUTH/CreatePersonne";
import UpdatePersonne from "./components/CompAUTH/UpdatePersonne";
import HeaderComponents from './components/HeaderComponents';
import FooterComponents from './components/FooterComponents';
import profile from "./components/CompAUTH/profile";
import boardAdmin from "./components/CompAUTH/boardAdmin";
import RegisterClt from "./components/CompAUTH/RegisterClt";
import RegisterCandidat from "./components/CompAUTH/RegisterCandidat";
import ClientInscrip from "./components/CompAUTH/ClientInscrip";
import Offre from "./components/CompOffre/Offre";
import Candidature from "./components/CompCandidature/Candidature";
import Experience from "./components/CompExperience/Experience";
import competence from "./components/componentCompetences/competence";
import ListeOffre from "./components/CompOffre/ListeOffre";
import ListeCandidature from "./components/CompCandidature/ListeCandidature";
import boardUser from "./components/CompAUTH/boardUser";
import Entretien from "./components/compEntretien/Entretien";
import updateEntretien from "./components/compEntretien/updateEntretien";
import ListeEntretien from "./components/compEntretien/ListeEntretien";
import updateCompetence from "./components/componentCompetences/updateCompetence";
import listCompetence from "./components/componentCompetences/listCompetence";
import Formation from "./components/compFormation/Formation";
import updateFormation from "./components/compFormation/updateFormation";
import listeFormation from "./components/compFormation/listeFormation";
import updateExperience from "./components/CompExperience/updateExperience";
import listeExperience from "./components/CompExperience/listeExperience";
import updateOffre from "./components/CompOffre/updateOffre";
import updateCandidature from "./components/CompCandidature/updateCandidature";
import email from "./components/compEmail/email";
import Profile from "./components/Profile";
import forgetPassword from "./components/CompAUTH/forgetPassword";

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
    const personne = RegisterService.getCurrentUser();

    if (personne) {
      this.setState({
        currentUser: personne,
        showCandidatBoard: personne.roles.includes("ROLE_CANDIDAT"),
        showAdminBoard: personne.roles.includes("ROLE_ADMIN"),
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
                <Route path="/profile" component={Profile}></Route>
                <Route path="/forgetPassword" component={forgetPassword}></Route>
                <Route path="/home" component={HomeComponents}></Route>
                <Route path="/updatePersonee/:id" component={UpdatePersonne}></Route>
                <Route path="/offres" component={ListeOffre}></Route>
                <Route path="/addOffre" component={Offre}></Route>
                <Route path="/addEmail" component={email}></Route>
                <Route path="/signIn" component={Login}></Route>
                <Route path="/signUp" component={Register}></Route>
                <Route path="/signupClient" component={RegisterClt}></Route>
                <Route path="/signupCandidat" component={RegisterCandidat}></Route>
                <Route path="/admin" component={boardAdmin}></Route>
                <Route path="/profile" component={profile}></Route>
                <Route path="/cand" component={CandidatBoard}></Route>
                <Route path="/admin" component={boardAdmin}></Route>
                <Route path="/user" component={boardUser}></Route>
                <Route path="/all" component={HomeComponents}></Route>
                <Route path="/updateOffre/:id" component={updateOffre}></Route>
                <Route path="/candidatures" component={ListeCandidature}></Route>
                <Route path="/addCandidatures" component={Candidature}></Route>
                <Route path="/updateCandidatures/:id" component={updateCandidature}></Route>
                <Route path="/addCompetences" component={competence}></Route>
                <Route path="/updateCompetences/:id" component={updateCompetence}></Route>
                <Route path="/competences" component={listCompetence}></Route>
                <Route path="/addEntretien" component={Entretien}></Route>
                <Route path="/addEntretien" component={Entretien}></Route>
                <Route path="/entretiens" component={ListeEntretien}></Route>
                <Route path="/updateFormation/:id" component={updateFormation}></Route>
                <Route path="/addFormation" component={Formation}></Route>
                <Route path="/formations" component={listeFormation}></Route>
                <Route path="/Listeentretiens" component={ListeEntretien}></Route>
                <Route path="/updateEntretien/:id" component={updateEntretien}></Route>
                <Route path="/addExperience" component={Experience}></Route>
                <Route path="/updateExperience/:id" component={updateExperience}></Route>
                <Route path="/experiences" component={listeExperience}></Route>

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