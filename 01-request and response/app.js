const http= require('http');
const PORT=3000;
const server=http.createServer((req,res)=>
{
    if(req.url==='/')
    {
        res.end("<h1>Hello World</h1>");
    }
    else if(req.url==='/pizza')
    {
        res.end("<h1>this is your pizza</h1>");
    }
    else if(req.url==='/home')
    {
        res.end("<h1>Welcome Home</h1>");
    }
    else if(req.url==='/about')
    {
        res.end("<h1>Welcome to About Us</h1>");
    }
    else if(req.url==='/node')
    {
        res.end("<h1>Welcome to my Node JS project</h1>");
    }
    else
    {
        res.end("<h1>404 Page Not Found</h1>");
    }
})
server.listen(PORT, () =>
{
    console.log(`Server is running on http://localhost:${PORT}`);
})