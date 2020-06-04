let fs = require('fs');
let express = require('express');
let path = require('path');
let sql = require('mssql');

let app = express();
app.use(express.static("public"));
app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

var router = express.Router();

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
    let config = {
        user: 'sa',
        password: 'lions1234',
        server: 'localhosst', 
        database: 'lions' 
    };

    sql.connect(config, function (err) {
    
        if (err) console.log(err);
        // create Request object
        var request = new sql.Request();
        request.query('select * from email', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            console.log(recordset);
            
        });
    });

    ans.render("formtest.html");
});

app.use("/data",function(req,ans){
    ans.send(req);
});

app.listen(8880);

module.exports = router;
