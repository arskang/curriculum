import React from 'react';
import Edder from '../img/edderMask-gris.gif';

const Foto = () => <div className="column is-one-quarter">
    <figure>
        <p className="has-text-centered image">
            <img className="is-rounded" src={Edder} alt="Edder Foto" style={{ maxWidth: "128px" }} />
        </p>
    </figure>
</div>;

export default Foto;