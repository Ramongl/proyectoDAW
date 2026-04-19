import { db } from "../utils/db";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { pedido_id, nuevo_estado } = body;

  try {
    
    await db.query(
      "UPDATE pedidos SET estado = ? WHERE id = ?",
      [nuevo_estado, pedido_id]
    );

    console.log(`Pedido ${pedido_id} cambiado a ${nuevo_estado}`);

  } catch (error) {
    console.error("Error al actualizar estado:", error);
    throw createError({
      statusCode: 500,
      message: "No se pudo cambiar el estado del pedido"
    });
  }
});