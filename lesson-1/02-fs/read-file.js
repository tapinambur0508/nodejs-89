// const fs = require("node:fs");
// const fs = require("node:fs").promises;
const fs = require("node:fs/promises");

// fs.readFile("read.txt", { encoding: "utf-8" }, (error, data) => {
//   if (error) {
//     return console.error(error);
//   }

//   console.log(data);
// });

// fs.promises
//   .readFile("read.txt", { encoding: "utf-8" })
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// fs.readFile("read.txt", { encoding: "utf-8" })
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

async function main() {
  const data = await fs.readFile("read.txt", { encoding: "utf-8" });

  console.log(data);
}

main().catch((error) => console.error(error));
