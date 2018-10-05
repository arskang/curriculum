import React from 'react';

const AboutMe = () => 
    <div className="container">
        <div className="border-bottom">
            <h2 className="subtitle">Un poco sobre mi</h2>
        </div>

        <section className="hero is-light">
            <div className="hero-body">
                <div className="container">
                    <p className="subtitle">Estudié la licenciatura en <b>Diseño Gráfico</b> en la <b>Facultad de Arquitectura, Diseño y Urbanismo</b> de la <b>Universidad Autónoma de Tamaulipas</b>. Me apasiona la identidad corporativa y el desarrollo de aplicaciones web.</p>

                    <p className="subtitle">Inicié como diseñador gráfico en una empresa de desarrollo de software, ahí fue donde surgio mi primer reto para desarrollar una aplicación web. Aprendí lo básico de <b>PHP</b>, <b>C#</b> (el patrón de diseño <b>MVC</b>) y <b>SQL</b> leyendo plantillas de código. Con tutoriales aprendí <b>Git</b>, <b>GitHub</b>, <b>HTML5</b>, <b>CSS3</b>, <b>JavaScript</b> y <b>Expresiones Regulares</b></p>

                    <p className="subtitle">El lenguaje que más domino es <b>JavaScript</b>, actualmente estoy estudiando <b>Node.js</b>, <b>React.js</b> y <b>Redux</b>. Mi interes principal es dominar este lenguaje.</p>

                    <p className="subtitle">Como desarrollador, mi primer proyecto personal fue esta página: <a href="https://www.omanag.com" rel="noopener noreferrer" target="_blank" className="link is-info" ><b>Omaña Grupo Inmobiliario</b></a> <small>(desarrollada on <b>PHP</b>)</small>.</p>

                    <p className="subtitle">No soy muy bueno para expresarme con palabras, así que espero me den una oportunidad de demostrar mis habilidades, esta página la desarrolle con <b>React.js</b> (conocimientos básicos), adjunto el código para que me puedan evaluar. <a href="https://github.com/arskang/curriculum" rel="noopener noreferrer" target="_blank" className="link is-info" ><i className="fab fa-github is-size-5" ></i></a> </p>
                </div>
            </div>
        </section>
    </div>;

export default AboutMe;