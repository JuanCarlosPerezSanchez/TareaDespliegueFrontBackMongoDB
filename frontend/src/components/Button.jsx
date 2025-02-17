import React, { useState } from 'react';
import { getTareas } from '../services/API';

const Button = ({ onDataFetched }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const tareasData = await getTareas(); 
      onDataFetched(tareasData);
    } catch (error) {
      console.error('Error al obtener las tareas:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handleClick} disabled={loading}>
      {loading ? 'Cargando...' : 'Obtener Tareas'}
    </button>
  );
};

export default Button;