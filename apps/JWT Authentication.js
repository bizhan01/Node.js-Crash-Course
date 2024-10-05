const jwt = require("jsonwebtoken");

const secretKey = "mySecretKey";

const token = jwt.sign({ user: "john_doe" }, secretKey, { expiresIn: "1h" });

jwt.verify(token, secretKey, (err, decoded) => {
  if (err) {
    console.error(err);
  } else {
    console.log(decoded);
  }
});
