import { db } from "../utils/db";

export default defineEventHandler(async (event) => {
  // Se lee del front las variables enviadas
  const body = await readBody(event);
  const { pedido_id, nuevo_estado } = body;

  try {
    // Se realiza el update pasando los parámetros del body
    await db.query(
      "UPDATE pedidos SET estado = ? WHERE id = ?",
      [nuevo_estado, pedido_id]
    );
    // Mensaje de exito
    console.log(`Pedido ${pedido_id} cambiado a ${nuevo_estado}`);

  } catch (error) {
    // Se notifica el error
    console.error("Error al actualizar estado:", error);

    // Se envia al navegador el error codigo 500 y el mensaje predefinido 
    throw createError({
      statusCode: 500,
      message: "No se pudo cambiar el estado del pedido"
    });
  }
});