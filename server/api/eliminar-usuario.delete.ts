export default defineEventHandler(async (event) => {
  // Se recibe el ID del front
  const { id } = getQuery(event);
  // Se ejecuta la query de eliminación con ese ID
  await db.execute('DELETE FROM usuarios WHERE id = ?', [id]);
  // Se retorna el mensaje de exito
  return { message: "Usuario borrado" };
});