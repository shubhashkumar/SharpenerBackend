const mysql = require("mysql2");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Subhash@123@@",
  database: "testdb",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database");
  const creatStudents = `CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
  )`;
  db.execute(creatStudents, (err) => {
    if (err) {
      console.error("Error creating table:", err);
      connection.end();
      return;
    }
    console.log("Table created or already exists");
  });
});

module.exports = db;
