
const apiUrl = 'https://tareadesplieguefrontbackmongodb.onrender.com/tareas';

async function obtenerTareas() {
  try {
    const response = await fetch(`${apiUrl}`);
    if (!response.ok) {
      throw new Error('No se pudieron obtener las tareas');
    }
    const tareas = await response.json();
    console.log(tareas);
  } catch (error) {
    console.error('Error al obtener tareas:', error);
  }
}