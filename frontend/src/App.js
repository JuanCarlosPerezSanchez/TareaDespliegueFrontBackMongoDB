import React, { useState } from 'react';
import Button from './components/Button';
import './styles/globals.css';
import './index.css';

function App() {
  const [tareas, setTareas] = useState([]);

  return (
    <div className="App">
      <h1>Ten siempre tus tareas organizadas!!!</h1>
      <Button setTareas={setTareas} />
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
              <tr key={tarea._id}>
                <td>{tarea._id}</td>
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