import React from 'react';

const Footer = props => 
    <footer className="footer">
        <div className="content has-text-centered">
            <p>Esta página fue creada con</p>
            <p>
                <a href="https://reactjs.org/" rel="noopener noreferrer" target="_blank" className="link is-info"><b><i className="fab fa-react is-size-5" ></i>  React.js</b></a>
                 - <a href="https://bulma.io/" rel="noopener noreferrer" target="_blank" className="link is-info" ><b><i className="fab fa-css3-alt is-size-5" ></i> Bulma.css</b></a>
                  - <a href="https://fontawesome.com/" rel="noopener noreferrer" target="_blank" className="link is-info" ><b><i className="fab fa-font-awesome is-size-5" ></i> Font Awesome</b></a>
            </p>
            <p>por <a href="https://github.com/arskang/curriculum" rel="noopener noreferrer" target="_blank" className="link is-info" ><i className="fab fa-github is-size-5" ></i> <strong>Edder Silva</strong></a>.</p>
        </div>
    </footer>;

export default Footer;