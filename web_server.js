let fs = require('fs');
let express = require('express');
let path = require('path');
let sql = require('mssql');

let app = express();
app.use(express.static("public"));
app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

let config = {
    user: 'sa',
    password: 'lions1234',
    server: 'localhost', 
    database: 'lions' ,
    port: 1433
};

let router = express.Router();

app.get("/",function(req,ans){
    ans.render("index.html");
});

app.get("/videos.html",function(req,ans){
    ans.render("videos.html");
});

app.get("/robots.html",function(req,ans){
    ans.render("robots.html");
});

app.get("/contactanos.html",function(req,ans){
    ans.render("contactanos.html");
});

app.get("/formtest.html",function(req,ans){
    // config for your database
    

    ans.render("formtest.html");
});

app.use("/data",function(req,ans){
    let fname = req.query.fname;
    let lname = req.query.lname;
    let email = req.query.email;
    console.log(fname + " " + lname + " " +  email);



    let conn = new sql.ConnectionPool(config);
    conn.connect().then(function(){
        let transaction = new sql.Transaction(conn);
        transaction.begin().then(function(){
            let request = new sql.Request(transaction);
            request.query("INSERT INTO lions.dbo.aplicaciones (nombre,apellido,email,creacion) VALUES ('" + fname + "','" + lname + "','" + email + "',GETDATE());").then(function () {
                transaction.commit().then(function (recordSet) {
                    console.log(recordSet);
                    conn.close();
                }).catch(function (err) {
                    console.log("Error in Transaction Commit " + err);
                    conn.close();
                });
            }).catch(function (err) {
                console.log("Error in Transaction Begin " + err);
                conn.close();
            });
        }).catch(function (err) {
            console.log(err);
            conn.close();
        }).catch(function (err) {
        console.log(err);
        });
    });
    ans.redirect("./index.html");
});

app.use('/login',function(req,ans){
    let username;
    let password;
    try{
        username = req.query.username;
        password = req.query.password;
    }
    catch{
        return ans.redirect('../admin');
    }

    let conn = new sql.ConnectionPool(config);
    conn.connect().then(function () {
        let request = new sql.Request(conn);
        request.query("select password from lions.dbo.admins where usuarioAdmin='" + username + "'").then(function (recordSet) {
            console.log(recordSet['recordset']);
            if(password == recordSet['recordset'][0]['password']){
                ans.redirect("../index.html");
            }
            else{
                ans.redirect("../admin");
            }
            conn.close();
        }).catch(function (err) {
            console.log(err);
            conn.close();
        });
    }).catch(function (err) {
        console.log(err);
    });
    
});

app.get('/admin',function(req,ans){
    ans.render('LoginADMIN.html');
});

app.listen(8880);

module.exports = router;

