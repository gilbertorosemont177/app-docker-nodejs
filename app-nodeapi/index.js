const express = require('express')
const app = express()
var mysql = require('mysql')
const port = 3000

var dbconnection = mysql.createConnection({
  host: '0.0.0.0',
  user: 'root',
  password: 'root',
  database: 'USERSTEST',
  port:7006
});

dbconnection.connect();
  
app.listen(port, () => {console.log("liste port 3000")})

app.get('/',(req, res) => {

  let query="SELECT * FROM LoginUsers";
  dbconnection.query(query, (err, rows)=> {
    if (err) throw err;
  //console.log('helloworld 0 ')
 console.log('username => ', rows[0].usernames)
  })
  //connection.end()
  res.send('Hello World! 1')
});
