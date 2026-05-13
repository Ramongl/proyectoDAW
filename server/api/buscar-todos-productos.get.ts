import { db } from '../utils/db'

export default defineEventHandler(async (event) => {
  try {
    // Se guardan los resultados en un array
    const [rows] = await db.query('SELECT * FROM productos ORDER BY id DESC');
    // Se devuelve el array al front
    return rows;

  } catch (error) {
    console.error("Error en DB:", error);
    // Se envia al navegador el error codigo 500 y el mensaje predefinido
    throw createError({
      statusCode: 500,
      statusMessage: 'Error interno al obtener los productos',
    });
  }
});