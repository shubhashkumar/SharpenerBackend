const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;  
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Subhash@123@@',
  database: 'testdb'
});
connection.connect((err)=>
{
    if(err)
    {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');

    const userTable = `create table if not exists users(
    id intAUTO_INCREMENT primary key,
    name varchar(50) not null,
    email varchar(50) not null unique
    )`;
    const busesTable = `create table if not exists buses(
    id int AUTO_INCREMENT primary key,
    busNumber int not null unique,
    totalSeats int not null,
    availableSeats int not null
    )`;
    const bookingTable = `create table if not exists bookings(
    id int AUTO_INCREMENT primary key,
    seatNumber int not null
    )`;
    const paymentsTable = `create table if not exists payments(
    id int AUTO_INCREMENT primary key,
    amountPaid int not null,
    paymentStatus varchar(20) not null
    )`;


    connection.execute(userTable, (err) => {
        if (err) {
          console.error('Error creating users table:', err);
          connection.end();
          return;
        }   
        console.log('Users table created or already exists');
    })
    connection.execute(busesTable, (err) => {
        if (err) {
          console.error('Error creating buses table:', err);
          connection.end();
          return;
        }   
        console.log('Buses table created or already exists');
    })
    connection.execute(bookingTable, (err) => {
        if (err) {
          console.error('Error creating bookings table:', err);
          connection.end();
          return;
        }   
        console.log('Bookings table created or already exists');
    })
    connection.execute(paymentsTable, (err) => {
        if (err) {
          console.error('Error creating payments table:', err);
          connection.end();
          return;
        }   
        console.log('Payments table created or already exists');
    })
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});