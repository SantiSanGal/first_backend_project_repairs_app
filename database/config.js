const { Sequelize } = require('sequelize');

//se instancia la clase
const db = new Sequelize({
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    //host: ip o localhost, si se despliega en un servidor, se pone la ip del servidor
    username: process.env.BD_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    //copiar el nombre de la base de datos con mayusculas o minusculas
    logging: false
    //si es true, cada vez que se haga una consulta, se verá en la consola
});

module.exports = { db };