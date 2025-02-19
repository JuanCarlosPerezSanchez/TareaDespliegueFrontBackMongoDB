import React from 'react';
import { getTareas } from 'https://tareadesplieguefrontbackmongodb.onrender.com';

const Button = ({ onDataFetched }) => {
  const handleClick = async () => {
    try {
      const tareasData = await getTareas();
      onDataFetched(tareasData);
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