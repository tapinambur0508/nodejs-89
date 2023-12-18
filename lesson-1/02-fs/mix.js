const fs = require("node:fs/promises");

async function main() {
  const data = await fs.readFile("mix.txt", { encoding: "utf-8" });
  const transformedData = data.toUpperCase();
  await fs.writeFile("mix.txt", transformedData);
}

main().catch((error) => console.error(error));
