import { Sequelize } from 'sequelize';


const db = new Sequelize('database_challenge', 'root', 'contrasenia', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;
