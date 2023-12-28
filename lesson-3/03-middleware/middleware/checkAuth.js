function checkAuth(req, res, next) {
  const apiKey = req.query["api-key"];

  if (req.method === "GET") {
    if (apiKey !== "123456") {
      return res.status(401).send("Please provide your api key");
    }

    console.log("Hello");

    next();
  } else {
    next();
  }
}

module.exports = checkAuth;
