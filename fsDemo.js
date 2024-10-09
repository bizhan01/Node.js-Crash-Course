// import fs from "fs";
import fs from "fs/promises";

// read the file
// fs.readFile("./test.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

//  read file
//

// Read file
const readFile = async () => {
  try {
    const data = await fs.readFile("./test.txt", "utf8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// writeFile()

const writeFile = async () => {
  try {
    await fs.writeFile("./test.txt", "Hello, I am writing to this file");
    console.log("File written to...");
  } catch (error) {
    console.log(error);
  }
};

writeFile();
readFile();
