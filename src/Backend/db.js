// const { Pool } = require("pg");
var promise = require("bluebird");
var options = {
	// Initialization Options
	promiseLib: promise,
};
var pgp = require("pg-promise")(options);
var connectionString = "postgres://ha_admin:root@localhost:5432/ha_db";
var db = pgp(connectionString);

module.exports = db;
