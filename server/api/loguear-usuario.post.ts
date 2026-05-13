import { db } from '../utils/db'

export default defineEventHandler(async (event) => {
  // Se leen los datos recibidos del front
  const body = await readBody(event)
  const { email, password } = body
  // Si no hubiera alguno de los dos, se lanza error de usuario con mensaje predefinido
  if (!email || !password) {
    throw createError({
      statusCode: 400,
      message: 'Email y contraseña son obligatorios'
    })
  }

  try {
    // Se declara un array para guardar todos las cuentas con el mismo email

    const [rows]: any = await db.execute(
      'SELECT * FROM usuarios WHERE email = ?',
      [email]
    )
    // Se elige la primera
    const usuario = rows[0]
    // Si no existe se lanza error 400 con mensaje predefinido
    if (!usuario) {
      throw createError({
        statusCode: 400,
        message: 'El correo electrónico no está registrado'
      })
    }
    // Si existe pero la contraseña no es correcta, se lanza error 400 con mensaje predefinido
    if (usuario.password !== password) {
      throw createError({
        statusCode: 400,
        message: 'Contraseña incorrecta'
      })
    }
    // Si todo es correcto, devuelve todos los datos del usuario para que los capture la cookie
    

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
    // Se envia al navegador el error codigo 500 y el mensaje predefinido
    console.error("ERROR LOGIN:", error.message)
    throw createError({
      statusCode: 500,
      message: 'Error interno del servidor'
    })
  }
})