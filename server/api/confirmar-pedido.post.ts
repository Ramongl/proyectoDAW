import { db } from "../utils/db"; //

export default defineEventHandler(async (event) => {
  // Se reciben los datos necesarios del front
  const body = await readBody(event);
  const { usuario_id, productos, total } = body;

  try {
    // Se declara la variable resultado para luego referenciar en el mensaje de exito el ID creado
    // Dentro de ella se ejecuta la query para insertar un nuevo producto usando los datos del front

    const [resultPedido] = await db.query(
      "INSERT INTO pedidos (usuario_id, total, estado) VALUES (?, ?, 'Pendiente')",
      [usuario_id, total],
    );

    const pedidoId = resultPedido.insertId;
    // Se usa la variable del front producto (array con la compra) para registrar todas las linesa de pedido
    // gracias a un bucle for
    for (const prod of productos) {
      await db.query(
        "INSERT INTO lineas_pedido (pedido_id, producto_id, cantidad, precio_unitario) VALUES (?, ?, ?, ?)",
        [pedidoId, prod.id, prod.cantidad, prod.precio],
      );
    }
    // MEnsaje de exito
    return { message: "Pedido guardado con éxito", pedidoId };
  } catch (error) {
    // Se envia al navegador el error codigo 500 y el mensaje predefinido
    throw createError({
      statusCode: 500,
      message: "Error al guardar el pedido",
    });
  }
});
