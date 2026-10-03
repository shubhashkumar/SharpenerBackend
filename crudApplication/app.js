const express= require('express');
const app= express();
const port= 3000;
const homeRouter= require('./routes/home');
const studentsRouter= require('./routes/students');
const coursesRouter= require('./routes/courses');
const pageNotFoundRouter= require('./routes/404');
app.use('/', homeRouter);
app.use('/students', studentsRouter);
app.use('/courses', coursesRouter);
app.use(pageNotFoundRouter);


app.listen(port,()=>
    {console.log(`Server is running on http://localhost:${port}`)}
    )