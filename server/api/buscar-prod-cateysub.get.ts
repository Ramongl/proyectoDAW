import { db } from "../utils/db";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const categoria = query.categoria;
  const subcategoria = query.sub;
  try {
    let sql = "SELECT * FROM productos WHERE categoria = ? and stock > 0 ";
    let params = [categoria];

    if (subcategoria && subcategoria !== "" && subcategoria !== "0") {
      sql += " AND subcategoria = ?";
      params.push(subcategoria);
    }

    const [rows] = await db.query(sql, params);
    return rows;
  } catch (error) {
    throw createError({ statusCode: 500, statusMessage: "Error interno al obtener los productos" });
  }
});
