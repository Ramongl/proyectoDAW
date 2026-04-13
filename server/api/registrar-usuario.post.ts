import { db } from '../utils/db'

export default defineEventHandler(async (event) => {
  // 1. Leemos el paquete de datos que envías desde registro.vue
  const body = await readBody(event)
  
  try {
    
    const [resultado] = await db.execute(
      'INSERT INTO usuarios (nombre, email, dni, password, domicilio, zipcode, rol, zipId) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [
        body.nombre,
        body.email,
        body.dni,
        body.password,
        body.domicilio,
        body.zipcode,
        body.rol,
        body.zipId
      ]
    )
    
    return { mensaje: 'Usuario guardado con ID: ' + resultado.insertId }

  } catch (error: any) {
    console.error("ERROR SQL:", error.message)
    
    throw createError({
      statusCode: 500,
      message: 'Fallo en la inserción: ' + error.message
    })
  }
})