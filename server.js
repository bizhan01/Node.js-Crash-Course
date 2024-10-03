import { log } from "console";
import http from "http";
const PORT = 8000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text/html");
  res.statusCode = 404;

  res.end("<h1>Hello World</h1>");
});

server.listen(PORT, () => {
  console.log(`Server runing on port ${PORT}`);
});
