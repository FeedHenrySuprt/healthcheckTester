var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

function healthcheckRoute() {
  var healthcheck = new express.Router();
  healthcheck.use(cors());
  healthcheck.use(bodyParser());


  // GET REST endpoint - query params may or may not be populated
  healthcheck.get('/', function(req, res) {
    console.log(new Date(), 'In healthcheck route GET / req.query=', req.query);
    var world = req.query && req.query.healthcheck ? req.query.healthcheck : 'World';

    res.json({
                status: "warn",
                summary: "This is a health result similar in format to the Aer Lingus health endpoint format",
                details: [
                {
                  description: "Test booking confirmation endpoint",
                  test_status: "ok",
                  result: "Successfully loaded booking confirmation endpoint in 56ms",
                  runtime: 56
                }
              ]
            });
  });

  healthcheck.post('/', function(req, res) {
    console.log(new Date(), 'In healthcheck route POST / req.body=', req.body);
  });

  return healthcheck;
}

module.exports = healthcheckRoute;
