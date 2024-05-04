// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'e-commerce'
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    alert('Error connecting to MySQL database: ' + err.stack);
    return;
  }
  alert('Connected to MySQL database as ID ' + connection.threadId);
});

// Perform database operations here

// Close the connection
connection.end((err) => {
  if (err) {
    alert('Error closing MySQL database: ' + err.stack);
    return;
  }
 alert('Closed MySQL database connection');
});
