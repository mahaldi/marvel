import React from 'react';
import './assets/scss/index.scss';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history'

import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Theme from './styles/theme'
import loadable from '@loadable/component'

const Header = loadable(() => import('./views/components/header/component'))
const Home = loadable(() => import('./views/pages/home'))
const Detail = loadable(() => import('./views/pages/detail'))
const NotFoundPage = loadable(() => import('./views/pages/NotFoundPage'))
const Overlay = loadable(() => import('./views/components/overlay'))
const Explore = loadable(() => import('./views/pages/explore'))

class App extends React.Component {
  render(){
    return (
      <React.Fragment>
        <Router history={history}>
          <ThemeProvider theme={Theme}>
            <CssBaseline />
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
          </ThemeProvider>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
