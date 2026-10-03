const express = require('express');
const app = express();
const port = 3000;
const getBooksRouter = require('./routes/getBooks');
const postBooksRouter = require('./routes/postBooks');
app.use('/books', getBooksRouter);
app.use('/books', postBooksRouter);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});