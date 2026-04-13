import { db } from "../utils/db";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  try {
    const [resultado] = await db.execute(
      "INSERT INTO productos (marca, nombre, descripcion, precio, categoria, subcategoria, imagen, stock) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        body.marca,
        body.nombre,
        body.descripcion,
        body.precio,
        body.categoria,
        body.subcategoria,
        body.imagen,
        body.stock,
      ],
    );

    return { mensaje: "Producto guardado con ID: " + resultado.insertId };
  } catch (error: any) {
    console.error("ERROR SQL:", error.message);

    throw createError({
      statusCode: 500,
      message: "Fallo en la inserción: " + error.message,
    });
  }
});
