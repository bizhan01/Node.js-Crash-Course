import { log } from "console";
import http from "http";
const PORT = 8000;

const server = http.createServer((req, res) => {
  res.end("Hello World");
});

server.listen(PORT, () => {
  console.log(`Server runing on port ${PORT}`);
});
