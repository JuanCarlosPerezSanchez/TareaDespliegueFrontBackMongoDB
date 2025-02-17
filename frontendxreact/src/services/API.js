const apiUrl = '';

export const getDatos = async () => {
    try {
      const response = await fetch(`${apiUrl}`);
      if (!response.ok) {
        throw new Error('Error al obtener los datos');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };