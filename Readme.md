# API REST Eventos UNLaR

Api rest creada para el trabajo final del curso de mern del polotecnologico usando NodeJs y Express

## Contenido

1. [Instalación](#instalación)
2. [Configuración](#configuración)
3. [Estructura del Proyecto](#estructura-del-proyecto)
4. [Uso](#uso)

## Instalación

Asegúrate de tener [Node.js 20 latest](https://nodejs.org/) instalado.

1. Clona el repositorio:

   ```bash
   git clone https://github.com/maxiivandlf/TPFINAL-BACK.git

   ```

2. Instala dependencias:

   ```bash
   cd TPFINAL-BACK
   npm install
   ```

## Configuracion

- #### VARIABLES DE ENTORNO

  Se debe hacer una copia del archivo **.env.dist** y renombrarlo como **.env**. Con respecto a su contenido, es necesario asignar los valores a correspondientes a las variables:

  ```js
  PORT = 'port to server';
  USER_DB = 'user of your database';
  PASS_DB = 'password of your database';
  COLLECTION_NAME = 'name of your collection';
  DATABASE_NAME = 'name of your database';
  ```

## Estructura del proyecto

```
/src
  /controllers
  /db
  /middlewares
  /models
  /routes
  /services
  app.js
  .env
  package-lock.json
  package.json
```

## Uso

### MÓDULO DE EVENTOS

Este módulo permite la gestión de eventos de la unlar. El mismo, ofrece funciones para agregar, modificar, borrar o leer el registro de un evento/s.

#### Métodos HTTP

- Ruta base + URI: (ejemplo: http://localhost/events/?page=2&limit=4)

| Tipo   | URI               | Descripción                                                    |
| ------ | ----------------- | -------------------------------------------------------------- |
| GET    | /events/?page=1&limit=10 | Obtiene los registros paginados (por defecto page 1, limit 10) |
| GET    | /events/:id              | Obtiene un registro en específico identificado por id          |
| POST   | /events/                 | Crea un nuevo registro                                         |
| PUT    | /events/:id              | Modifica un registro en específico identificado por id         |
| DELETE | /events/:id              | Elimina un registro en específico identificado por id          |
