// Get an instance of mysql we can use in the app
var mysql = require('mysql')

// Create a 'connection pool' using the provided credentials
var pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'classmysql.engr.oregonstate.edu',
    user            : 'cs340_perssonr',
    password        : '4353',
    database        : 'cs340_perssonr'
})

// Export it for use in our application
module.exports.pool = pool;