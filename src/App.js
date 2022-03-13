import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import ListPersonneComponents from './components/ListPersonneComponents';
import CreatePersonne from './components/CreatePersonne';
import UpdatePersonne from './components/UpdatePersonne';
import viewPersonneComponent from './components/viewPersonneComponent';
import HeaderComponents from './components/HeaderComponents';
import FooterComponents from './components/FooterComponents';



function App() {
  return (

    <div>
      <HeaderComponents />

      <div>
        <Router>
          <div className="container">
            <Switch>
              <Route path="/" exact component={ListPersonneComponents}> </Route>
              <Route path="/personnes" component={ListPersonneComponents}></Route>
              <Route path="/addPersonnes" component={CreatePersonne}></Route>
              <Route path="/updatePersonee/:id" component={UpdatePersonne}></Route>
              <Route path="/ViewPersonnes/:id" component={viewPersonneComponent}></Route>

            </Switch>
          </div>
        </Router>

      </div >
      <FooterComponents />
    </div>
  );
}

export default App;
