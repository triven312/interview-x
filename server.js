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
  queryA = "SELECT * FROM tournament_standings where name='"+ req.body.teamA+"'";
  queryB = "SELECT * FROM tournament_standings where name='"+ req.body.teamB+"'";
  pool.getConnection(function(err, connection) {
    console.log(queryA);
    connection.query(queryA, function(err, rows, fields) {
      if (!err) {
        console.log("Entered here 1");
        if(rows.length == 0){
          console.log("Entered here 2");
          insertTeamA="INSERT into sys.tournament_standings (name, points, matches, won, lost, draw) values ('"+req.body.teamA+"',0,0,0,0,0)"
          connection.query( insertTeamA, function(err, rows, fields) {
            if (!err) {
              connection.release();
              console.log("Entered here 3");
            }
            else{
              console.log('Error while performing Query. 1');
            }
          });
        }
      }
      else{
        console.log('Error while performing Query. 2');
      }
    });
  });
  if(req.body.teamAScore > req.body.teamBScore){
    console.log("Team A is the winner");
  }
  else{
    if(req.body.teamBScore > req.body.teamAScore){
      console.log("Team B is the winner");
    }
    else {
      console.log("Match is drawn");
    }
  }
  var output = "";
  output=output+("<br><p>Thankyou for the submission</p><br>");
  res.status(200).send(output);
});

require('http').createServer(app).listen(3000, function(){
  console.log('Listening on 3000');
});
