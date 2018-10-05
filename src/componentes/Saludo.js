import React, { Component } from 'react';
import helpers from '../js/Helpers';

class Saludo extends Component {

    CambiarVisitante() {
        try {
            localStorage.removeItem('NombreVisitante');
            helpers.EventoBienvenida({
                titulo: 'p.modal-card-title',
                nuevo: 'div.nuevoVisitante',
                antiguo: 'div.visitanteConocido'
            });
            document.querySelector('div.nuevoVisitante').classList.remove('is-hidden');
            document.querySelector('div.visitanteConocido').classList.add('is-hidden');
        } catch (e) { console.error(e.message); }
    }

    GuardarNombre(e) {
        try {
            if (e.keyCode === 13) {
                const mensaje = document.createElement('div');
                if (document.querySelector('div.mensajeNombre') !== null) {
                    document.querySelector('div.mensajeNombre').classList.remove('shake', 'flash');
                    document.querySelector('div.mensajeNombre').classList.add('fadeOut');
                    setTimeout(() => { document.querySelector('div.mensajeNombre').remove(); }, 1000);
                }
                if (/^([a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-])+$/.test(e.target.value)) {
                    localStorage.setItem('NombreVisitante', e.target.value);
                    mensaje.classList.add("notification", "is-primary", "animated", "flash", "mensajeNombre");
                    mensaje.innerHTML = `<b>${e.target.value}</b> es un placer, gracias por tu tiempo.`;
                    setTimeout(() => { document.querySelector('button.delete').click(); }, 2500);
                } else {
                    mensaje.classList.add("notification", "is-danger", "animated", "shake", "mensajeNombre");
                    mensaje.innerHTML = `Lo siento pero <b>${e.target.value}</b> no parece un nombre...`;
                }
                e.target.parentElement.parentElement.appendChild(mensaje);
            }
        } catch (err) { console.error(err.message); }
    }

    OcultarMensaje(e) {
        try {
            if(e.target.checked) { localStorage.setItem('OcultarMensaje', true); }
            else { localStorage.removeItem('OcultarMensaje'); }
        } catch (err) { console.error(err.message); }
    }

    render() {
        return(
            <div className="modal animated">
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title"></p>
                        <button className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                        <div className="is-hidden nuevoVisitante">
                            <div className="notification">
                                Por favor presiona la tecla <b>'Enter'</b> después de capturar tu nombre.
                            </div>
                            <div>
                                <label className="has-text-info">¿Con quién tengo el gusto?</label>
                                <input type="text" className="input" id="NombreVisitante" placeholder="Captura tu nombre aquí" onKeyDown={this.GuardarNombre} />
                            </div><br />
                        </div>
                        <div className="is-hidden visitanteConocido">
                            <p className="has-text-danger">¿No eres <b>{helpers.Nombre()}</b>? <a href="#newVisitante" className="link has-text-link" onClick={this.CambiarVisitante}>Click Aquí</a></p>
                        </div><br />
                        <div>
                            <input type="checkbox" id="OcultarMensaje" className="checkbox" onClick={ this.OcultarMensaje } /> <label htmlFor="OcultarMensaje">No volver a mostrar este mensaje</label>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Saludo;