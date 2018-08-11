const mysql = require('mysql');
const dbConfig = require(`../${process.env.NODE_ENV === 'production' ? 'prod' : 'dev'}-config.json`).mysqlDB;

const connection = mysql.createConnection({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database
});

exports.connection = connection;