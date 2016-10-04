var express = require('express'); 
var bodyParser = require('body-parser');
var fs = require("fs");
var mysql = require('mysql');
var Q = require('Q');

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
  pool.getConnection(function(err, connection) {
    if(req.body.teamAScore > req.body.teamBScore){
      console.log("Team A is the winner");
        queryA="UPDATE sys.tournament_standings SET points=points+2,matches=matches+1,won=won+1 WHERE name='"+req.body.teamA+"'";
        queryB="UPDATE sys.tournament_standings SET matches=matches+1,lost=lost+1 WHERE name='"+req.body.teamB+"'";
    }
    else{
      if(req.body.teamBScore > req.body.teamAScore){
        console.log("Team B is the winner");
        queryA="UPDATE sys.tournament_standings SET matches=matches+1,lost=lost+1 WHERE name='"+req.body.teamA+"'";
        queryB="UPDATE sys.tournament_standings SET points=points+2,matches=matches+1,won=won+1 WHERE name='"+req.body.teamB+"'";
      }
      else {
        console.log("Match is drawn");
        queryA="UPDATE sys.tournament_standings SET matches=matches+1,draw=draw+1 WHERE name='"+req.body.teamA+"'";
        queryB="UPDATE sys.tournament_standings SET matches=matches+1,draw=draw+1 WHERE name='"+req.body.teamB+"'";
      }
    }
    function updateTeamA(){
        var defered = Q.defer();
        connection.query(queryA,defered.makeNodeResolver());
        return defered.promise;
    }  
    function updateTeamB(){
        var defered = Q.defer();
        connection.query(queryB,defered.makeNodeResolver());
        return defered.promise;
    }
    Q.all([updateTeamA(),updateTeamB()]).then(function(results){
      var output = "";
      output=output+("<br><p>Thankyou for the submission</p><br>");
      res.status(200).send(output);
    });
  });
});

require('http').createServer(app).listen(3000, function(){
  console.log('Listening on 3000');
});
