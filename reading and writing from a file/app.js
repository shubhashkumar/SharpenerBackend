const http = require("http");
const fs=require('fs');
const { error } = require("console");
const PORT = 3000;
const server = http.createServer((req, res) =>
{ 
  if (req.url === "/" && req.method==="GET")
   {
    let userDetails = "";
     fs.readFile("userDetails.txt", "utf8", (err, data) => 
     {
      
      if (!err && data) {
       userDetails = `${data}`
      }
    res.setHeader("Content-Type", "text/html");
    return res.end(`
        ${userDetails}
        <form action="/submit" method="POST">
        <label for="username">username:</label>
        <input type="text" id="username" name="username">
        <button type="submit">Send</button>
    </form>`);
      });
    }
  else if (req.url === "/submit" && req.method === "POST") 
    {
    let body = [];
    req.on("data", (chunks) => {
      body.push(chunks);
      console.log(chunks);
    })
    req.on("end",()=>
    {
        const bodyString=Buffer.concat(body).toString();
        console.log(bodyString);
        const formDataObj={};
        const formData= new URLSearchParams(bodyString);
        console.log(formData);
         for(const [key,value] of formData)
         {
            formDataObj[key]=value;
         }
          fs.writeFile('userDetails.txt', bodyString,(error)=>
        {
            res.writeHead(302,{'Location':'/'});
            res.end();   
        });
         
    })
  }
});
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
