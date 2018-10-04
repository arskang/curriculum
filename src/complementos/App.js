import React, { Component } from 'react';
import logo from "../img/logo.svg";
import Header from './Header';
import Footer from './Footer';
import 'bulma/css/bulma.css';
import "../css/App.css";
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all';

class App extends Component {
  render() {
    return <section className="hero is-light is-fullheight" >
        <Header imagen={logo} />

        <Footer />
      </section>;
  }
}

export default App;
