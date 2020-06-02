/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // read the file: filepath, callback (err, text)
  // if we stringify can we split by \n? string.split('\n')
  //var line = text.split('/n')[0];
  fs.readFile(filePath, (err, text)=>{
    if (err) {
      callback(err);
    } else {
      text = (text.toString());
      var line = text.split('\n')[0];
      callback(null, line);
    }
  });
};


// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  //call the callback: err, status Code
  request.get (url, (err, response) => {
    if (err) {
      callback(err);
    } else {
      callback(null, response.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
