import React from 'react';
import './assets/scss/index.scss';
import Header from './views/components/header'
import Home from './views/pages/home'
import Characters from './views/pages/characters'
import Character from './views/pages/character'
import Comics from './views/pages/comics'
import Series from './views/pages/series'
import NotFoundPage from './views/pages/NotFoundPage'
import { Router, Route, Switch } from 'react-router-dom';
import history from './history'
import Overlay from './views/components/overlay'

class App extends React.Component {
  render(){
    return (
      <React.Fragment>
        <Router history={history}>
					<Route path="*" component={Header}/>
					<Overlay />
          <section className="container marvel">
            <Switch>
                <Route path="/" exact component={Home}/>
								<Route path="/characters" exact component={Characters}/>
								<Route path="/comics" exact component={Comics}/>
								<Route path="/series" exact component={Series}/>
                <Route path="/character/:id" exact component={Character}/>
                <Route path="*" component={NotFoundPage}/>
            </Switch>
          </section>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
