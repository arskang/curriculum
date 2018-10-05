import React, { Component } from 'react';
import Foto from './Foto';
import { DatosPersonales, OtrosDatos } from './DatosPersonales';
import Habilidades from './Habilidades';
import Experiencia from './Experiencia';
import Formacion from './Formacion';
import AboutMe from './AboutMe';

class Curriculum extends Component {

    render() {
        return(
            <div className="content padding-2">
                <div className="columns">
                    <Foto />
                    <DatosPersonales />
                    <OtrosDatos />
                </div>
                <br />
                <AboutMe />
                <br />
                <Habilidades />
                <br />   
                <Experiencia />                
                <br />
                <Formacion />
            </div>
        );
    }
}

export default Curriculum;