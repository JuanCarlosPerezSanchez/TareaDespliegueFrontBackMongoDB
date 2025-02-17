const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());
app.use(cors());

// Datos de ejemplo (simulando una base de datos)
let tareas = [
  { id: 1, titulo: 'Hacer la compra', descripcion: 'Comprar leche, pan y huevos' },
  { id: 2, titulo: 'Estudiar Node.js', descripcion: 'Aprender a crear APIs REST' },
];

// Ruta GET /tareas: Devuelve la lista de tareas
app.get('/tareas', (req, res) => {
  res.json(tareas);
});

// Ruta POST /tareas: Crea una nueva tarea
app.post('/tareas', (req, res) => {
  const { titulo, descripcion } = req.body;
  if (!titulo || !descripcion) {
    return res.status(400).json({ error: 'Debe poner un titulo y una descripción' });
  }
  const nuevaTarea = {
    id: tareas.length + 1,
    titulo,
    descripcion,
  };
  tareas.push(nuevaTarea);
  res.status(201).json(nuevaTarea);
});

// Ruta DELETE /tareas/:id: Elimina una tarea por su ID
app.delete('/tareas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const tareaIndex = tareas.findIndex((t) => t.id === id);
  if (tareaIndex === -1) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }
  tareas.splice(tareaIndex, 1);
  res.status(204).send();
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});