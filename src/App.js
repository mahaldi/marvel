import React from 'react';
import './assets/scss/index.scss';
import Header from './views/components/header'
import Home from './views/pages/home'

class App extends React.Component {
  render(){
    return (
      <React.Fragment>
        <section className="hero is-info is-large">
          <Header />
          <Home />
        </section>
      </React.Fragment>
    );
  }
}

export default App;
