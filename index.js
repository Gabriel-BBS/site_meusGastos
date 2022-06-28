const db = require("./db");
const conn = db.connection();
console.log(conn);

// const nome = db.select();
// console.log(nome);

  var http = require('http');
  const nome =  db.select(); 
  http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(nome);
  }).listen(8080);
  console.log('Server running at http://127.0.0.1:8080/');
