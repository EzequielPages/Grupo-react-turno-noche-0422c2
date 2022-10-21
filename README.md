# TravelN

## Descripción

TravelN es un proyecto realizado en la comisión 0422c2 de la Academia Numen. Es una agencia de viajes, que ofrece paquetes para recorrer el mundo.
La aplicación permite conectarse con una base de datos realizada con `Json-server`.
Permite seleccionar ciertos paquetes, conocer la oferta del momento, agregar tours al carro, poder acceder a él, agregando o eliminando productos desde el mismo, asi como tambien ver una simulación del precio total de tus vacaciones :)
Al clickear sobre el botón "Seleccionar fecha", pide llenar un formulario con datos sobre el viaje del usuario, luego de eso se genera un modal de confirmación, que al clickear "Agregar" se envía la petición al carro, aumentando su cantidad de 1 en 1 en cantidad de tours.

## Las dependencias utilizadas fueron:

- React Js (Para la realización general del proyecto)
- Material UI, Tailwind CSS y Daysiui (Para estilos, etiquetas y componentes predefinidos) 
- Json-server (Para conectar el proyecto con una base de datos y poder darle persistencia a los productos en el carro mediante localStorage)
- Font-Awesome, react-slick, entre otras pequeñas dependencias (Se utilizaron para Iconos, carrouseles, y pequeños componentes)


## Descargar y correr el proyecto

Una vez descargado el proyecto, instalar dependencias mediante:

### `npm install`

Ahora correr la base de datos mediante el siguiente comando:

### `npm run server`

Ya podemos abrir la DB, debemos abrir en una pestaña del navegador:

### `http://localhost:5000/products`
### `http://localhost:5000/cart`

Luego correr el proyecto mediante:

### `npm start`

con este último comando, se abre una pestaña con el proyecto en el puerto 3000 de su navegador.

## Gif Funcionalidad
![image](https://github.com/RodriPal/Grupo-react-turno-noche-0422c2/blob/main/public/TravelNGif.gif)

### Realizado por:
- Nicolas Valiconto
- Ezequiel Pagés
- Ignacio Morales
- Rodrigo Paliza
- Ayrton García
- Nicolas Iozzi
- Gabriela Tejerina

