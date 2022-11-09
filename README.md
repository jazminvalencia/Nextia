# Prueba tecnica para Nextia

## Instalacion de dependencias

```
npm install
```

### ejecutar Modo produccion

```
npm start

```

### ejecutar Modo desarrollo

```
npm run dev

```

### Se agrego una carpeta Script en la cual se agregaron los retos de la prueba tecnica y un script para cargar los datos de los bienes

```
/app/scripts

```

### Se implemento dotenv para el manejo de ambientes

### Se implemento ORM sequelize para hacer la conexion en posgrest asi como toda la gestion de la base de datos

Nota: en este caso sequelize gestiona de forma automatica los ids y timestamps, asi que para cumplir con los requerimientos de la prueba se desabilitaron estas funciones de sequelize y se gestionaron heredando de la clase base
