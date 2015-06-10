var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

function helloRoute() {
  var hello = new express.Router();
  hello.use(cors());
  hello.use(bodyParser());


  // GET REST endpoint - query params may or may not be populated
  hello.get('/', function(req, res) {
    console.log(new Date(), 'In hello route GET / req.query=', req.query);
    var world = req.query && req.query.hello ? req.query.hello : 'World';

    // see http://expressjs.com/4x/api.html#res.json
    res.json({
                status: "ok",
                summary: "No issues to report. All tests passed without error",
                details: [
                {
                description: "Test booking confirmation endpoint",
                test_status: "ok",
                result: "Successfully loaded booking confirmation endpoint in 56ms",
                runtime: 56
                },
                {
                description: "Test travel advisory endpoint",
                test_status: "ok",
                result: "Successfully loaded travel advisory endpoint in 55ms",
                runtime: 55
                },
                {
                description: "Test date range destinations csv",
                test_status: "ok",
                result: "Successfully loaded date range destinations csv in 58ms",
                runtime: 58
                },
                {
                description: "Test long haul booking confirmation endpoint",
                test_status: "ok",
                result: "Successfully loaded long haul booking confirmation endpoint in 56ms",
                runtime: 56
                },
                {
                description: "Test flight search endpoint",
                test_status: "ok",
                result: "Successfully loaded flight search endpoint in 136ms",
                runtime: 136
                },
                {
                description: "Test view booking endpoint",
                test_status: "ok",
                result: "Successfully loaded view booking endpoint in 147ms",
                runtime: 147
                },
                {
                description: "Test Airport Otions",
                test_status: "ok",
                result: "Successfully loaded airport options endpoint in 160ms",
                runtime: 160
                },
                {
                description: "Test booking endpoint",
                test_status: "ok",
                result: "Successfully loaded booking endpoint in 173ms",
                runtime: 173
                },
                {
                description: "Test manage booking endpoint",
                test_status: "ok",
                result: "Successfully loaded manage booking endpoint in 182ms",
                runtime: 182
                }
              ]
            });
  });

  // POST REST endpoint - note we use 'body-parser' middleware above to parse the request body in this route.
  // This can also be added in application.js
  // See: https://github.com/senchalabs/connect#middleware for a list of Express 4 middleware
  hello.post('/', function(req, res) {
    console.log(new Date(), 'In hello route POST / req.body=', req.body);
    var world = req.body && req.body.hello ? req.body.hello : 'World';

    // see http://expressjs.com/4x/api.html#res.json
    res.json({msg: 'Hello ' + world});
  });

  return hello;
}

module.exports = helloRoute;
