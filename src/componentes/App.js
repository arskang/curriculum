import React, { Component } from 'react';
import Header from './Header';
import Saludo from './Saludo';
import Footer from './Footer';
import Curriculum from './Curriculum';
// Helpers
import helpers from '../js/Helpers';
// Imagenes y otros
import logo from '../img/logo.svg';
// Archivos CSS
import 'bulma/css/bulma.css';
import 'animate.css/animate.css';
import '../css/App.css';
// Iconos
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  CargaEventos() {
    try {
      document.querySelector("button.delete").addEventListener("click", () => {
        document.querySelector("div.modal").classList.add("fadeOut");
        setTimeout(() => {
          document.querySelector("div.modal").classList.remove("is-active");
        }, 500)
      });
      helpers.EventoBienvenida({
        titulo: 'p.modal-card-title',
        nuevo: 'div.nuevoVisitante',
        antiguo: 'div.visitanteConocido'
      });
    } catch (e) { console.error(e.message); }
  }

  render() {
    return <section className="hero is-light is-fullheight" onLoad={ this.CargaEventos } >
        <Header imagen={logo} />
        <Saludo />        
        <Curriculum />
        <Footer />
      </section>;
  }
}

export default App;
