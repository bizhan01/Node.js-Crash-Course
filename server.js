import { log } from "console";
import http from "http";
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  // res.setHeader("Content-type", "text/html");
  // res.statusCode = 404;
  console.log(req.url);
  console.log(req.method);

  // res.writeHead(500, { "content-type": "application/json" });
  // res.end(JSON.stringify({ message: "Server Error" }));
  res.setHeader("Content-type", "text/html");
  res.end("<h1>Hello World</h1>");
});

server.listen(PORT, () => {
  console.log(`Server runing on port ${PORT}`);
});
