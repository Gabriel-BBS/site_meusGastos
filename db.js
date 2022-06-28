function connection(){
    const mysql = require("mysql");
    db = "mysql://gbbs_uml2:MnuVEM27DB@adim.c6k58hloag9m.us-east-1.rds.amazonaws.com:3306/init";
    const con = mysql.createConnection(db);
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });
}
module.exports = {connection}