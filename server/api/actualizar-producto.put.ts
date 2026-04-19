import { db } from "../utils/db";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

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
      success: true,
      message: "Producto actualizado correctamente",
    };
  } catch (error) {
    console.error("Error al actualizar el producto:", error);

    throw createError({
      statusCode: 500,
      message:
        "Error interno al intentar actualizar el producto en la base de datos",
    });
  }
});
