const express = require('express');
const studentRoutes = require('./routes/studentRoutes');
const db=require("./utils/db-connections")
const app = express();  
const port = 3000;
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use('/students', studentRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})