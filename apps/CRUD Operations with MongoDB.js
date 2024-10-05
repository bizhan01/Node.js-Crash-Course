const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const dbName = "mydb";

MongoClient.connect(url, (err, client) => {
  if (err) throw err;

  const db = client.db(dbName);

  // Perform CRUD operations here

  client.close();
});
