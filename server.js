import { log } from "console";
import http from "http";
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  // res.setHeader("Content-type", "text/html");
  // res.statusCode = 404;

  res.writeHead(500, { "content-type": "application/json" });
  res.end(JSON.stringify({ message: "Server Error" }));
});

server.listen(PORT, () => {
  console.log(`Server runing on port ${PORT}`);
});
