var http = require("http");
var count = 0;
var all_data = {};

function check_and_display() {
    if ((0 in all_data) && (1 in all_data) && (2 in all_data)) {
        console.log(all_data[0]);
        console.log(all_data[1]);
        console.log(all_data[2]);
    }
}

http.get(process.argv[2], function(response) {
    response.setEncoding("utf-8");
    var final_data = "";
    response.on("data", function(data) {
        final_data += data;
    });
    response.on("end", function() {
        all_data[0] = final_data;
        check_and_display();
    });
});

http.get(process.argv[3], function(response) {
    response.setEncoding("utf-8");
    var final_data = "";
    response.on("data", function(data) {
        final_data += data;
    });
    response.on("end", function() {
        all_data[1] = final_data;
        check_and_display();
    });
});

http.get(process.argv[4], function(response) {
    response.setEncoding("utf-8");
    var final_data = "";
    response.on("data", function(data) {
        final_data += data;
    });
    response.on("end", function() {
        all_data[2] = final_data;
        check_and_display();
    });
});
