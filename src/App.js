import React from 'react';
import './assets/scss/index.scss';
import Header from './views/components/header'
import Home from './views/pages/home'
import Character from './views/pages/character'
import NotFoundPage from './views/pages/NotFoundPage'
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history'
const history = createBrowserHistory();

class App extends React.Component {
  render(){
    return (
      <React.Fragment>
        <Router history={history}>
          <Header />
          <section className="container marvel">
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/:id" exact component={Character}/>
                <Route path="*" component={NotFoundPage}/>
            </Switch>
          </section>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
