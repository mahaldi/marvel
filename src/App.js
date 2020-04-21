import React from 'react';
import './App.scss';
import Header from './views/components/header'
import Home from './views/pages/home'
function App() {
  return (
    <React.Fragment>
      <section className="hero is-info is-large">
        <Header />
        <Home />
      </section>
    </React.Fragment>
  );
}

export default App;
