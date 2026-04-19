import { db } from '../utils/db'

export default defineEventHandler(async (event) => {
  try {
    const [rows] = await db.query('SELECT * FROM usuarios LEFT JOIN ccaa on usuarios.zipId = ccaa.id_provincia where usuarios.id not in (select usuario_id from pedidos )');

    return rows;

  } catch (error) {
    console.error("Error en DB:", error); 
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Error interno al obtener los usuarios',
    });
  }
});