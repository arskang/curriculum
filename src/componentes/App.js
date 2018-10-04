import React, { Component } from 'react';
import logo from '../img/logo.svg';
import Edder from '../img/edderMask-gris.gif';
import Header from './Header';
import Footer from './Footer';
import Progreso from "./Progreso";
import 'bulma/css/bulma.css';
import "../css/App.css";
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all';

class App extends Component {
  render() {
    return <section className="hero is-light is-fullheight">
        <Header imagen={logo} />

        <div className="content">
        <div className="media">
          <figure className="media-left">
            <p className="image is-128x128">
              <img className="is-rounded" src={Edder} alt="Edder Foto" />
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <div className="columns">
                <div className="column">
                  <p className="title is-4">Edder de Jesús Silva Arteaga</p>
                  <p className="subtitle is-6">Licenciado en Diseño Gráfico - <small>Ced. Prof. <b>10676831</b></small></p>
                  <p>
                    <i className="fas fa-envelope"></i> <b><a href="mailto:arskang@gmail.com" rel="noopener noreferrer" target="_blank" className="link is-info">arskang@gmail.com</a></b>
                    <br />
                    <i className="fas fa-mobile-alt"></i> <b><a href="tel:+528331720069" rel="noopener noreferrer" target="_blank" className="link is-info">(833) 1 72 00 69</a></b>
                  </p>
                </div>
                <div className="column">
                  <p>
                    <small>Fecha y lugar de nacimiento:</small>
                    <br />
                    <b>2 de julio de 1987, Tampico Tamaulipas</b>
                    <br />
                    <small>Dirección:</small>
                    <br />
                    <b>Azteca #506 Col. 16 de Septiembre; Cd. Madero, Tamaulipas C.P. 89512</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className="content">
          <div className="columns">
            <div className="column">
              <Progreso value="25" clases="progress is-danger" />
              <Progreso value="50" clases="progress is-danger" />
              <Progreso value="75" clases="progress is-danger" />
            </div>
            <div className="column">
              <Progreso value="25" clases="progress is-danger" />
              <Progreso value="50" clases="progress is-danger" />
              <Progreso value="75" clases="progress is-danger" />
            </div>
            <div className="column">
              <Progreso value="25" clases="progress is-danger" />
              <Progreso value="50" clases="progress is-danger" />
              <Progreso value="75" clases="progress is-danger" />
            </div>
          </div>
        </div>

        <Footer />
      </section>;
  }
}

export default App;
