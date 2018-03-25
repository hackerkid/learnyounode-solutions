var http = require("http");

http.get(process.argv[2], function(response) {
    response.setEncoding("utf-8");
    var final_data = "";
    response.on("data", function(data) {
        final_data += data;
    })
    response.on("end", function() {
        console.log(final_data.length);
        console.log(final_data);
    })
});
