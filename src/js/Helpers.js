class Helpers {

    constructor() {
        this.$ = (query) => document.querySelector(query);
    }

    Saludo() {
        try {
            let saludo;
            const date = new Date();
            //console.log(date.getHours());
            if (date.getHours() > 18) {
                saludo = "buenas noches";
            } else if (date.getHours() > 11) {
                saludo = "buenas tardes";
            } else if (date.getHours() > 6) {
                saludo = "buenos días";
            } else { saludo = "vaya hora"; }
            return saludo;
        } catch (e) { console.error(e.message); }
    }

    Nombre() {
        try {
            let nombre = null;
            if (localStorage.getItem('NombreVisitante') !== null) {
                const nomVisitante = localStorage.getItem('NombreVisitante');
                nombre = nomVisitante;
            }
            return nombre;
        } catch(e) { console.error(e.message); }
    }

    Ocultar() { return ((localStorage.getItem('OcultarMensaje') !== null) ? true : false); }

    EventoBienvenida(objeto) {
        try{
            if (this.Ocultar()) {
                document.querySelector('div.modal').classList.remove('is-active');
            } else {
                const nombre = this.Nombre();
                let bienvenida;
                let saludo = this.Saludo();
                if (nombre !== null) {
                    saludo = saludo[0].toUpperCase() + saludo.substr(1, saludo.length - 1);
                    bienvenida = `¡${saludo} <b>${nombre}</b>!, gracias por regresar.`;
                    this.$(objeto.antiguo).classList.remove('is-hidden');
                    this.$(objeto.nuevo).classList.add('is-hidden');
                } else {
                    bienvenida = `¡Hola, ${saludo}!`;
                    this.$(objeto.antiguo).classList.add('is-hidden');
                    this.$(objeto.nuevo).classList.remove('is-hidden');
                }
                this.$(objeto.titulo).innerHTML = bienvenida;
                document.querySelector('div.modal').classList.add('is-active');
            }
        } catch(e) { console.error(e.message); }
    }

}

const helpers = new Helpers();

export default helpers;