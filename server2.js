import { createServer } from "http";
const PORT = process.env.PORT;

const users = [
  { id: 1, name: "Bizhan" },
  { id: 2, name: "John" },
  { id: 3, name: "Jane" },
];

const server = createServer((req, res) => {
  if (req.url === "/api/users" && req.method === "GET") {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(users));
    res.end();
  } else {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify({ message: "Route Not Found" }));
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server runing on port ${PORT}`);
});
