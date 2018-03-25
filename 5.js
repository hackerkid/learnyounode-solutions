var fs = require("fs")
var path = require("path")
var ext = process.argv[3];
ext = "." + ext;

fs.readdir(process.argv[2], function(err, data) {
    for (file of data) {
        if (ext == path.extname(file)) {
            console.log(file);
        }
    }
});