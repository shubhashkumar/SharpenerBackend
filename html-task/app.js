const express=require('express');
const fileRouter=require('./router/fileRouter');
const app=express();
app.use('/api',fileRouter);


app.listen(3000, () => {
	console.log('Server listening on port 3000');
});
