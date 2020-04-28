import React from 'react';
import './assets/scss/index.scss';
import Header from './views/components/header'
import Home from './views/pages/home'
import Detail from './views/pages/detail'
import NotFoundPage from './views/pages/NotFoundPage'
import { Router, Route, Switch } from 'react-router-dom';
import history from './history'
import Overlay from './views/components/overlay'
import Explore from './views/pages/explore'

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
								<Route path="/:explore" exact component={Explore}/>
                <Route path="/:type/:id" exact component={Detail}/>
                <Route path="*" component={NotFoundPage}/>
            </Switch>
          </section>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
