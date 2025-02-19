import React, { useState } from 'react';
import Button from './components/Button';
import './styles/globals.css';
import './index.css';

function App() {
  const [tareas, setTareas] = useState([]);

  return (
    <div className="App">
      <h1>Mi Aplicación de Tareas</h1>
      <Button />
      {tareas.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            {tareas.map((tarea) => (
              <tr key={tarea.id}>
                <td>{tarea.id}</td>
                <td>{tarea.titulo}</td>
                <td>{tarea.descripcion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;