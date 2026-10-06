//Create a server using express
const express = require('express');
const app = express();
const port = 3000;
//Serve a form using a GET request.
const formRouter = require('./router/formRouter');
app.use(express.static('public'));
app.use('/api', formRouter);
app.use(express.json());
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});