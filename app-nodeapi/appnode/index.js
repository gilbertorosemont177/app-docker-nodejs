const express = require('express')
const app = express()
var mysql = require('mysql')
const PORT = 3000

var dbconnection = mysql.createConnection({
  host: 'mysqlimage',//modifier ca en creant un reseau
  user: 'root',
  password: 'root',
  database: 'USERSTEST',
  port:3306
});

dbconnection.connect();
  
app.listen(PORT, () => {console.log(`liste port ${PORT}`)})

app.get('/test',(req, res) => {

  let query="SELECT * FROM LoginUsers";
  dbconnection.query(query, (err, rows)=> {
    if (err) throw err;
  //console.log('helloworld 0 ')
 console.log('username => ', rows[0].usernames)
  res.json( {
            username:rows[0].usernames,
            password:rows[0].passwords   
            })
  })
  //connection.end()

  
  
});
