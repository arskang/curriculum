import React from 'react';

const Header = props =>
        <nav className="level is-primary">
            <p className="level-item has-text-centered">
                <a href="#Prueba" className="link is-info">Home</a>
            </p>

            <p className="level-item has-text-centered">
                <a href="#Prueba" className="link is-info">Menu</a>
            </p>

            <p className="level-item has-text-centered">
                <img src={props.imagen} alt="Logotipo" style={{ width: "500px" }} />           
            </p>

            <p className="level-item has-text-centered">
                <a href="#Prueba" className="link is-info">Home</a>
            </p>

            <p className="level-item has-text-centered">
                <a href="#Prueba" className="link is-info">Menu</a>
            </p>
        </nav>;

export default Header;