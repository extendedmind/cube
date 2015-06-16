// Default configuration for development.
module.exports = {
  "mongo-host": process.env.MONGODB_PORT_27017_TCP_ADDR,
  "mongo-port": 27017,
  "mongo-database": "cube",
  "mongo-username": null,
  "mongo-password": null,
  "http-port": 1080,
  "udp-port": 1180
};
