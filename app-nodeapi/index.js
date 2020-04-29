const express = require('express')
const app = express()
var mysql = require('mysql')
const PORT = 3000

var dbconnection = mysql.createConnection({
  host: '172.17.0.2',
  user: 'root',
  password: 'root',
  database: 'USERSTEST',
  port:3306
});

dbconnection.connect();
  
app.listen(PORT, () => {console.log(`liste port ${PORT}`)})

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
