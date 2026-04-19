import { db } from '../utils/db'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email, password } = body

  if (!email || !password) {
    throw createError({
      statusCode: 400,
      message: 'Email y contraseña son obligatorios'
    })
  }

  try {

    const [rows]: any = await db.execute(
      'SELECT * FROM usuarios WHERE email = ?',
      [email]
    )

    const usuario = rows[0]

    if (!usuario) {
      throw createError({
        statusCode: 401,
        message: 'El correo electrónico no está registrado'
      })
    }

    if (usuario.password !== password) {
      throw createError({
        statusCode: 401,
        message: 'Contraseña incorrecta'
      })
    }


    return {
      id: usuario.id,
      nombre: usuario.nombre,
      dni: usuario.dni,
      rol: usuario.rol,
      domicilio: usuario.domicilio,
      zipcode: usuario.zipcode,
      email: usuario.email,
    }

  } catch (error: any) {
   
    if (error.statusCode) throw error

    console.error("ERROR LOGIN:", error.message)
    throw createError({
      statusCode: 500,
      message: 'Error interno del servidor'
    })
  }
})