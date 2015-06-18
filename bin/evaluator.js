var configLocation = "./evaluator-config";

if (process.argv.length > 2){
  // First parameter is an override config file
  configLocation = process.argv[2];
}

var options = require(configLocation),
    cube = require("../"),
    server = cube.server(options);

server.register = function(db, endpoints) {
  cube.evaluator.register(db, endpoints);
};

server.start();
