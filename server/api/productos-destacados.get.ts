import { db } from '../utils/db'

export default defineEventHandler(async (event) => {
  try {
    const [rows] = await db.query('SELECT * FROM productos where id IN (SELECT producto_id FROM lineas_pedido GROUP BY producto_id order by SUM(CANTIDAD) desc) and stock >0 LIMIT 4');

    return rows;

  } catch (error) {
    console.error("Error en DB:", error);
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Error interno al obtener los productos',
    });
  }
});