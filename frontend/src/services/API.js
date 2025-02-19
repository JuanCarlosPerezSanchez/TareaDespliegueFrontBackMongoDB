
const apiUrl = 'https://tareadesplieguefrontbackmongodb.onrender.com';

async function obtenerTareas(setTareas) {
  try {
    const response = await fetch(`${apiUrl}/tareas`);
    const data = await response.json();
    setTareas(data); // ✅ Guarda las tareas en el estado
  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
}

export { obtenerTareas };