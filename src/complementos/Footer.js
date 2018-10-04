import React from 'react';

const Footer = props => 
    <footer class="footer">
        <div class="content has-text-centered">
            <p>
                Esta página fue creada con <a href="https://reactjs.org/" rel="noopener noreferrer" target="_blank" className="link is-info"><b><i className="fab fa-react" style={{ fontSize: "1.5em" }}></i>  React.js</b></a> - <a href="https://bulma.io/" rel="noopener noreferrer" target="_blank" className="link is-info" ><b><i className="fab fa-css3-alt" style={{ fontSize: "1.5em" }}></i> Bulma.css</b></a> - <a href="https://fontawesome.com/" rel="noopener noreferrer" target="_blank" className="link is-info" ><b><i className="fab fa-font-awesome" style={{ fontSize: "1.5em" }}></i> Font Awesome</b></a>
            </p>
            <p>
                por <a href="https://bulma.io/" rel="noopener noreferrer" target="_blank" className="link is-info" alt="GitHub"><i className="fab fa-github" style={{ fontSize: "1.5em" }}></i></a> <strong>Edder Silva</strong>.
            </p>
        </div>
    </footer>;

export default Footer;