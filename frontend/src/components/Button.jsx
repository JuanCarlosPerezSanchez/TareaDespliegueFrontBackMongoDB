
import React from 'react';
import { obtenerTareas } from '../services/API';

const Button = ({ setTareas }) => {
  return (
    <button onClick={() => obtenerTareas(setTareas)}>
      Obtener Tareas
    </button>
  );
};

export default Button;