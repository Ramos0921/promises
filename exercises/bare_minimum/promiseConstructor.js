/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// fs.readFile(filePath, (err, text)=>{
//   if (err) {
//     callback(err);
//   } else {
//     text = (text.toString());
//     var line = text.split('\n')[0];
//     callback(null, line);
//   }
// });

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  // return new promise(callback()
  return new Promise(function(resolve, reject) {
    //normal function stuff
    fs.readFile(filePath, (err, text) => {
      if (err) {
        reject(err);
      } else {
        text = text.toString();
        var line = text.split('\n')[0];
        resolve(line);
      }
    });
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  // TODO
  return new Promise(function (resolve, reject){
    request.get(url, (err,response) => {
      if (err){
        reject (err);
      } else {
        resolve (response.statusCode);
      }
    });
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
