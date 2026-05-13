import { db } from "../utils/db";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  // Se leen las variables enviadas por el front
  const {
    id,
    marca,
    nombre,
    precio,
    stock,
    categoria,
    subcategoria,
    imagen,
    descripcion,
  } = body;

  try {
    // Se realiza update con los datos recibidos
    await db.query(
      `UPDATE productos 
       SET marca = ?, 
           nombre = ?, 
           precio = ?, 
           stock = ?, 
           categoria = ?, 
           subcategoria = ?, 
           imagen = ?, 
           descripcion = ? 
       WHERE id = ?`,
      [
        marca,
        nombre,
        precio,
        stock,
        categoria,
        subcategoria,
        imagen,
        descripcion,
        id,
      ],
    );

    return {
      // Se lanza mensaje de exito
      success: true,
      message: "Producto actualizado correctamente",
    };
  } catch (error) {
    // Se notifica el error
    console.error("Error al actualizar el producto:", error);
    // Se envia al navegador el error codigo 500 y el mensaje predefinido 
    throw createError({
      statusCode: 500,
      message:
        "Error interno al intentar actualizar el producto en la base de datos",
    });
  }
});
