const { Client } = require('pg')
const client = new Client({
    connectionString: 'postgres://postgres:root@localhost:5432/smartreader'
})

client.connect()

client.query('SELECT * FROM accounts WHERE id=$1', [1], (err, res) => {
  console.log(err ? err.stack : res.rows[0]) // Hello World!
//   client.end()
})

exports.connection = client;