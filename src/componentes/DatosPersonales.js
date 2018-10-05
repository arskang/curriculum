import React from 'react';

export const DatosPersonales = () => <div className="column">
    <p className="title is-4">Edder de Jesús Silva Arteaga</p>
    <p className="subtitle is-6">
        Licenciado en Diseño Gráfico <br />
        <small>
            Ced. Prof. <b>10676831</b>
        </small>
    </p>
    <p>
        <i className="fas fa-envelope" /> <b>
            <a href="mailto:arskang@gmail.com" rel="noopener noreferrer" target="_blank" className="link is-info">
                arskang@gmail.com
            </a>
        </b>
        <br />
        <i className="fas fa-mobile-alt" /> <b>
            <a href="tel:+528331720069" rel="noopener noreferrer" target="_blank" className="link is-info">
                (833) 1 72 00 69
            </a>
        </b>
    </p>
</div>;

export const OtrosDatos = () => <div className="column">
        <p>
            <small>Fecha y lugar de nacimiento:</small>
            <br />
            <b>2 de julio de 1987, Tampico Tamaulipas</b>
            <br />
            <small>Intereses:</small>
            <br />
            <b>
                JavaScript (¡me encanta este lenguaje!)<br />
                Estoy haciendo lo posible por dominarlo.
            </b>
        </p>
    </div>;