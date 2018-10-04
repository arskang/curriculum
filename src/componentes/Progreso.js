import React from 'react';

const Progreso = props => (
  <progress className={props.clases} value={props.value} max="100">
    {props.value}%
  </progress>
);

export default Progreso;
