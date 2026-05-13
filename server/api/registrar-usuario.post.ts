import { db } from '../utils/db'

export default defineEventHandler(async (event) => {
  // Se reciben los datos necesarios del front
  const body = await readBody(event)
  // Se declara la variable resultado para luego referenciar en el mensaje de exito el ID creado
  // Dentro de ella se ejecuta la query para insertar un nuevo producto usando los datos del front
  
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
    // Mensaje de exito
    return { mensaje: 'Usuario guardado con ID: ' + resultado.insertId }

  } catch (error: any) {
    console.error("ERROR SQL:", error.message)
    // Se envia al navegador el error codigo 500 y el mensaje predefinido
    throw createError({
      statusCode: 500,
      message: 'Fallo en la inserción: ' + error.message
    })
  }
})