# Desafío 20: MEJORAR LA ARQUITECTURA DE NUESTRA API

## Consigna:

- Modificar la capa de persistencia incorporando los conceptos de Factory, DAO, y DTO.

- Los DAOs deben presentar la misma interfaz hacia la lógica de negocio de nuestro servidor.

- El DAO seleccionado (por un parámetro en línea de comandos como lo hicimos anteriormente) será devuelto por una Factory para que la capa de negocio opere con el.

- Cada uno de estos casos de persistencia, deberán ser implementados usando el patrón singleton que impida crear nuevas instancias de estos mecanismos de acceso a los datos.

- Comprobar que si llamo a la factory dos veces, con una misma opción elegida, devuelva la misma instancia.

- Implementar el patrón Repository para la persistencia de productos y mensajes.

## Software utilizados:

- VSC

## Scripts

#### Backend: `nodemon server.js`

#### Backend: `nodemon server.js -p (puerto deseado)`

Run the application locally
[http://localhost:8080/](http://localhost:8080/) por default

## Extra

- [Documentation](https://nodejs.org/es/) Nodejs
- [Documentation](https://es.wikipedia.org/wiki/Protocolo_de_transferencia_de_hipertexto) HTTP
- [Documentation](https://www.npmjs.com/package/nodemon) nodemon
- [Documentation](https://expressjs.com/es/) express
- [Documentation](https://www.postman.com) Postman

## Author

> <p>Marcio Dubokovic </p>
> <p>Email: dubokovic7@gmail.com </p>

---
