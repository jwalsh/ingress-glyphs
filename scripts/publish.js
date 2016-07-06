var AWS = require('aws-sdk');
var _ = require('underscore');
var fs = require('fs');

// var bucket = 'cdn-jwalsh-production';
var bucket = 'jwalsh-cdn';


var s3 = new AWS.S3();
// s3.listBuckets(function(error, data) {
//   if (error) {
//     console.log(error); // error is Response.error
//   } else {
//     console.log(data); // data is Response.data
//   }
// });

var upload = function(name) {
  console.log('upload()', name);
  var key = name;
  var file = fs.readFileSync('example/public/' + name);

  s3.createBucket(
    {
      Bucket: bucket
    },
    function() {
      var params = {
        Bucket: bucket,
        Key: name,
        Body: file.toString()
      };
      s3.putObject(
        params,
        function(err, data) {
          if (err) {
            console.log(err);
          } else {
            console.log("Successfully uploaded " + name + " to " + bucket);
          }
        });
    });




};

fs.readdir('example/public', function(err, items) {
  // var sample = _.sample(items);
  // upload(sample);
  items
    .filter(function(e) {
      return e.indexOf('.png') !== -1;
    })
    .map(function(e, i, c) {
      upload(e);
    })

});
