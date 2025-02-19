const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
  origin: 'https://tarea-despliegue-front-back-mongo-db.vercel.app',
  methods: ['GET', 'POST', 'DELETE'],
};

app.use(cors(corsOptions));
app.use(express.json());

const mongoURI = 'mongodb+srv://jcpersan:jcpersan@tareaisrael.nzlep.mongodb.net/';
mongoose.connect(mongoURI)
  .then(() => console.log('Conexión exitosa a MongoDB Atlas'))
  .catch(err => console.log('Error al conectar a MongoDB Atlas:', err));

const tareaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
});

const Tarea = mongoose.model('Tarea', tareaSchema);

app.get('/tareas', async (req, res) => {
  try {
    const tareas = await Tarea.find();
    res.json(tareas);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener tareas' });
  }
});

app.post('/tareas', async (req, res) => {
  const { titulo, descripcion } = req.body;
  if (!titulo || !descripcion) {
    return res.status(400).json({ error: 'Debe poner un titulo y una descripción' });
  }
  try {
    const nuevaTarea = new Tarea({ titulo, descripcion });
    await nuevaTarea.save();
    res.status(201).json(nuevaTarea);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear tarea' });
  }
});

app.delete('/tareas/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const tareaEliminada = await Tarea.findByIdAndDelete(id);
    if (!tareaEliminada) {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar tarea' });
  }
});

app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});
