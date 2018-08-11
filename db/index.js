const { Client } = require('pg')
const client = new Client({
    connectionString: 'postgres://postgres:root@localhost:5432/smartreader'
})

client.connect()

client.query('SELECT * FROM accounts WHERE id=$1', [1], (err, res) => {
  console.log(err ? err.stack : res.rows[0]) // Hello World!
//   client.end()
})


const text = 'INSERT INTO accounts(id, email, password) VALUES($1, $2, $3) RETURNING *'
const values = [2, 'brian.m.carlson@gmail.com', '12345678']

// callback
client.query(text, values, (err, res) => {
  if (err) {
    console.log(err.stack)
  } else {
    console.log(res.rows[0])
    // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
  }
})

exports.connection = client;