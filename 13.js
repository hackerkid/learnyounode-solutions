var http = require("http");
var url = require("url");

var server = http.createServer(function(req, res) {
    var url_info = url.parse(req.url, true);
    var iso_date = url_info["query"]["iso"];
    var date = new Date(iso_date);
    res.writeHead(200, { 'Content-Type': 'application/json' })  

    if (url_info["pathname"] == "/api/parsetime") {
        var final = JSON.stringify({
            "hour": date.getHours(),
            "minute": date.getMinutes(),
            "second": date.getSeconds()
        });
        res.end(final);
    } else {
       res.end(JSON.stringify({"unixtime": date.getTime()}));
    }
})

server.listen(process.argv[2]);
