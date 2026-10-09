const express=require("express");
const app=express();
const mysql=require("mysql2");
const port=3000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Subhash@123@@',
  database: 'testdb'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
}); 

app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});