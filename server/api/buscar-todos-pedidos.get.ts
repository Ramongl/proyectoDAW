import { db } from '../utils/db'

export default defineEventHandler(async (event) => {
  try {
    const [rows] = await db.query('SELECT * FROM pedidos');

    return rows;

  } catch (error) {
    console.error("Error en DB:", error); 
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Error interno al obtener los pedidos',
    });
  }
});