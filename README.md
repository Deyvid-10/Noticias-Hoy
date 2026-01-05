# Nova Store

Nova Store es una tienda electrónica desarrollada con React y Express, diseñada para ofrecer una experiencia moderna y segura. En el frontend integra librerías como react-router-dom para la navegación dinámica, react-slick y slick-carousel para carruseles de productos, react-toastify para notificaciones interactivas y tailwindcss para un diseño responsivo y atractivo. Todo esto permite una interfaz intuitiva con vistas de productos, carrito de compras y flujo de usuario optimizado.


En el backend, la aplicación utiliza Express junto con MySQL2 para el manejo de datos, bcrypt para la encriptación de contraseñas, jsonwebtoken para autenticación segura con JWT y cookie-parser y cors para la gestión de sesiones y seguridad en las peticiones. Además, se emplea dotenv y zod para la configuración de entornos y validación robusta de datos. El resultado es una plataforma escalable y confiable que combina rendimiento, seguridad y una experiencia de usuario completa.



Si quieres ver mi trabajo de forma local en tu equipo, revisa mi documentación y sigue los pasos!

## Requisitos

    -Tener instalado node.js y NPM
    -Tener MySQL Workbench instalado

## a) Preparar la base de datos

    1-Crear una conexión con la siguiente configuración:
        hostname: localhost
        username: root
        password: Contrasena20
        schema or database: noticias-hoy
    NOTA: es importante que la configuración sea igual porque la API tiene estos datos configurados para funcionar

    2-Colocar la base de datos (en este caso noticias-hoy) por defecto (click derecho a la base de datos y set as default schema)
    3-Abrir el archivo base_de_datos.sql
    4-Copiar el contenido y pegarlo en tu gestor de base datos
    5-Ejecuta el Query 
    6-Confirmar que las tablas 'article' y 'publisher' se hayan creado. 

## b) Ejecutar o iniciar la API

    1-Abre una terminal
    2-Utiliza el cmdlet 'cd' para ir a la carpeta donde se encuentra la API (ej: cd C:\Users\Deyvid\Documents\Programacion\Noticias-Hoy\API\) 
    3-En la carpeta donde se encuentra la API ejecutar el comando 'npm install' para instalar las dependencias desde el archivo 'package.json'
    4-En la carpeta donde se encuentra la API ejecutar el comando 'npm run dev' para iniciar la API

### `npm install`
### `npm run dev`

## c) Abrir la aplicación

Ahora sí!

    1-Utiliza el cmdlet 'cd' para ir a la carpeta donde se encuentra el proyecto (ej: cd C:\Users\Deyvid\Documents\Programacion\Noticias-Hoy\)
    2-Instala las dependencias con el comando 'npm install'
    3-Abre el archivo All.js (que podras encontrar dentro de la carpeta del proyecto en la ruta \src\components\All,js) ve a la linea 102 descomentala para usar la api que preparaste anteriomente y la linea 103 comentala para que deje de usar la api que esta en la nube (puedes elegir que el proyecto consuma la api local que preparaste anteriormente o la api que ya tengo en la nube)
    4-Para iniciar el proyecto ejecuta 'npm start'

### `npm install`
### `npm start`
