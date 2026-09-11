const http = require("http");
const PORT = 3000;
const requestHandler=require("./module");
const server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
