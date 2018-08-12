const { Client } = require('pg');
const client = new Client({
    connectionString: 'postgres://postgres:root@localhost:5432/smartreader'
});

client.connect();

module.exports = client;