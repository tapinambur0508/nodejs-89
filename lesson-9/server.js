require("./db");

const app = require("./app");

const PORT = process.env.PORT || 8080;

console.log({ PORT, ["process.env.PORT"]: process.env.PORT });

app.listen(PORT, () => {
  console.info("Server started on port 8080");
});
