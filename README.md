# Proyecto E-COMMERCE



0. ESTRUCTURA DEL REPOSITORIO

    /app/components: Elementos UI reutilizables

    /app/pages: Páginas de la aplicación

    /app/utils: Clases

    /app/assets/imagenes: Recursos estáticos (imágenes, logos).

    /app/assets/css: carga de tailwind

    /server/api: Lógica del servidor.

    /server/utils: Conexión a BBDD.

    /SQL: Scripts de creación de tablas y triggers.

    .env: Credenciales y localización de la base de datos

1. NUXT.JS
    
    Revisar que node esté instalado

    Clonar el repositorio de github

    Instalar dependencias con npm: 
        
        npm install

    Definir las credenciales de la base de datos en el .env

    Levantar el servidor: 
        
        npm run dev


2. TAILWIND

    En la ruta app/assets/css debe haber un archivo main.css. En el se debe importar la libreria 
    
        @import "tailwindcss"
    

    Luego en el archivo nuxt.config.ts se debe incluir como parámetro 
    
        css: "['~/assets/css/main.css'],   future: {compatibilityVersion: 4,}


3. CONEXION A BASE DE DE DATOS

    Tras la modificación de las variables definidas en .env, se debe conectar el framework a la BBDD en server/utils/db.ts con el siguiente código:

        import mysql from 'mysql2/promise';
        
        const pool = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD, 
        database: process.env.DB_NAME,
        port: Number(process.env.DB_PORT) || 3306,
        });

        export const db = pool;
        
    Con el export garantizaremos que nuestro typescript puede llamar a dicha conexión

4. CARGA DE BBDD

    Utilizar las querys definidas en la ruta /SQL/proyectoeshop.sql para crear las tablas y los triggers
