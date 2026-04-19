export default defineEventHandler(async (event) => {
  const { id } = getQuery(event);

  await db.execute('DELETE FROM usuarios WHERE id = ?', [id]);
  
  return { message: "Usuario borrado" };
});