var express = require('express'); 
var bodyParser = require('body-parser');
var fs = require("fs");
var mysql      = require('mysql');
var app = express();
var pool  = mysql.createPool({
  connectionLimit : 1000,
  host     : 'localhost',
  user     : 'root',
  password : 'mysql123',
  database : 'sys'
});

app.use(bodyParser.urlencoded({
        extended: true
}));
app.use(bodyParser.json());
app.use(express.static('public'));
//app.use(app.router);
app.get('/getTableData', function(req, res){
  pool.getConnection(function(err, connection) {
    // Use the connection
    connection.query( 'SELECT * FROM tournament_standings', function(err, rows, fields) {
      if (!err) {
        connection.release();
        res.send(rows);
      }
      else
        console.log('Error while performing Query.');
    });      
  });
});

app.post('/submit', function(req, res){
  console.log(req.body);
  output=output+("<br><p>Thankyou for the submission</p><br>");
  res.send(200, output);
});

require('http').createServer(app).listen(3000, function(){
  console.log('Listening on 3000');
});
