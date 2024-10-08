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
  } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === "GET") {
    const id = req.url.split("/")[3];
    const user = users.find((user) => user.id === parseInt(id));
    res.setHeader("Content-Type", "application/json");
    if (user) {
      res.write(JSON.stringify(user));
    } else {
      res.statusCode = 404;
      res.write(JSON.stringify({ message: "User Not Found" }));
    }
    res.end();
  } else {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "Route Not Found" }));
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server runing on port ${PORT}`);
});
