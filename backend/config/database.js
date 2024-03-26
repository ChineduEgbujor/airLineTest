const mysql = require('mysql');

// Replace the placeholders with your actual database connection details
const dbConnection = mysql.createConnection({
  host     : 'your_database_host',
  user     : 'your_database_user',
  password : 'your_database_password',
  database : 'your_database_name'
});

dbConnection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = dbConnection;
