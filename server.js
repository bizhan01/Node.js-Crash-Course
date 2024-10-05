import { log } from "console";
import http from "http";
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  try {
    if (req.method === "GET") {
      if (req.url === "/") {
        res.writeHead(200, { "content-type": "text/html" });
        res.end("<h1>Hello World</h1>");
      } else if (req.url === "/about") {
        res.writeHead(200, { "content-type": "text/html" });
        res.end("<h1>About</h1>");
      } else {
        res.writeHead(404, { "content-type": "text/html" });
        res.end("<h1>Not Found</h1>");
      }
    } else {
      throw new Error("Method Not Allowed");
    }
  } catch (error) {
    res.writeHead(500, { "content-type": "text/html" });
    res.end("<h1>Server Error</h1>");
  }
});

server.listen(PORT, () => {
  console.log(`Server runing on port ${PORT}`);
});
