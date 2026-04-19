import { db } from "../utils/db"; // 

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { usuario_id, productos, total } = body;

  try {
    const [resultPedido] = await db.query(
      "INSERT INTO pedidos (usuario_id, total, estado) VALUES (?, ?, 'Pendiente')",
      [usuario_id, total]
    );
    
    const pedidoId = resultPedido.insertId;

    for (const prod of productos) {
      await db.query(
        "INSERT INTO lineas_pedido (pedido_id, producto_id, cantidad, precio_unitario) VALUES (?, ?, ?, ?)",
        [pedidoId, prod.id, prod.cantidad, prod.precio]
      );
    }

    return { message: "Pedido guardado con éxito", pedidoId };
  } catch (error) {
    throw createError({ statusCode: 500, message: "Error al guardar el pedido" });
  }
});