var net = require("net");

var server = net.createServer(function(socket) {
    var date = new Date();
    var month = date.getMonth();
    month = month + 1;
    if (month < 10) {
        month = "0" + month.toString();
    }
    var data = date.getFullYear() + "-" + month + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + "\n";
    socket.end(data);
});

server.listen(process.argv[2]);