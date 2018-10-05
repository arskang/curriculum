import React from 'react';

const Header = props =>
    <nav className="level is-primary padding" style={{ borderBottom: "solid 2px #ff3860" }}>
        <p className="level-item has-text-centered">
            <img src={props.imagen} alt="Logotipo" style={{ maxWidth: "500px" }} />           
        </p>
    </nav>;

export default Header;