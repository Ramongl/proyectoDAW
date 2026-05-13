import { db } from "../utils/db";

export default defineEventHandler(async (event) => {
  // Se reciben variables del front
  const query = getQuery(event);
  const categoria = query.categoria;
  const subcategoria = query.sub;
  try {
    // Se lanza la query 
    let sql = "SELECT * FROM productos WHERE categoria = ? and stock > 0 ";
    let params = [categoria];

    if (subcategoria && subcategoria !== "" && subcategoria !== "0") {
      // Se le añade la siguiente condicion a la query si hay una subcategoria marcada
      sql += " AND subcategoria = ?";
      params.push(subcategoria);
    }
    // Se guardan los resultados en un array
    const [rows] = await db.query(sql, params);
    // Se devuelve el array al front
    return rows;
  } catch (error) {
    // Se envia al navegador el error codigo 500 y el mensaje predefinido 
    throw createError({ statusCode: 500, statusMessage: "Error interno al obtener los productos" });
  }
});
