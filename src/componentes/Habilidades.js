import React from 'react';
import Progreso from "./Progreso";

const Habilidades = () => <div className="container">
    <div className="border-bottom">
        <h2 className="subtitle">Habilidades</h2>
    </div>
    <div className="columns">
        <div className="column">
            <h4 className="subtitle">Nivel básico</h4>
            <Progreso value="25" clases="progress is-danger" />
            <p>
                <i className="fab fa-github is-size-2" />&nbsp;&nbsp;
                <i className="fab fa-less is-size-2" />&nbsp;&nbsp;
                <i className="fab fa-markdown is-size-2" />&nbsp;&nbsp;
                <i className="fab fa-node is-size-2" />&nbsp;&nbsp;
                <i className="fab fa-npm is-size-2" />&nbsp;&nbsp;
                <i className="fab fa-php is-size-2" />&nbsp;&nbsp;
                <i className="fab fa-react is-size-2" />&nbsp;&nbsp;
                <i className="fab fa-wordpress is-size-2" />&nbsp;&nbsp;
            </p>
        </div>
        <div className="column">
            <h4 className="subtitle">Nivel medio</h4>
            <Progreso value="50" clases="progress is-danger" />
            <p>
                <i className="fab fa-css3-alt is-size-2" />&nbsp;&nbsp;
                <i className="fab fa-html5 is-size-2" />&nbsp;&nbsp;
            </p>
        </div>
        <div className="column">
            <h4 className="subtitle">Nivel avanzado</h4>
            <Progreso value="75" clases="progress is-danger" />
            <p>
                <i className="fab fa-js is-size-2" />&nbsp;&nbsp;
            </p>
        </div>
    </div>
</div>;

export default Habilidades;