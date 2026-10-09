const express=require("express");
const app=express();
const mysql=require("mysql2");
const port=3000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Subhash@123@@',
  database: 'testdb'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
  const creationQuery = `CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
  )`;
  connection.execute(creationQuery, (err) => {
    if (err) {
      console.error('Error creating table:', err);
      connection.end();
      return;
    }
    console.log('Table created or already exists');
  });
});

app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});