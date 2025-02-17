const ApiUrl = 'https://tareadesplieguefrontbackmongodb.onrender.com';

export const getTareas = async () => {
  try {
    const response = await fetch(`${ApiUrl}/tareas`);
    if (!response.ok) {
      throw new Error('Error al obtener las tareas');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};