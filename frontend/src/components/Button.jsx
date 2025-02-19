import React from 'react';
import { obtenerTareas } from '../services/API';

const Button = () => {
  const handleClick = async () => {
    try {
      await obtenerTareas();
    } catch (error) {
      console.error('Error al obtener las tareas:', error);
    }
  };

  return (
    <button onClick={handleClick}>
      Obtener Tareas
    </button>
  );
};

export default Button;