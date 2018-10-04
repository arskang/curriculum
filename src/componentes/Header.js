import React from 'react';

const Header = props =>
        <nav className="level is-primary" style={{ borderBottom: "solid 1px black" }}>
            <p className="level-item has-text-centered">
                <img src={props.imagen} alt="Logotipo" style={{ width: "500px" }} />           
            </p>
        </nav>;

export default Header;