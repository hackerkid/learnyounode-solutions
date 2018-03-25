var fs = require("fs")
var path = require("path")

function getFilesByExtension(dir, ext, callback) {
    ext = "." + ext;
    var files = [];
    fs.readdir(dir, function(err, data) {
        if (err) {
            return callback(err);
        }
        for (file of data) {
            if (ext == path.extname(file)) {
                files.push(file);
            }
        }
        callback(null, files);
    });
}

module.exports = getFilesByExtension;
