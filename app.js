const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/views/index.html"))
);

app.get("/about", (req, res) =>
  res.sendFile(path.join(__dirname, "/views/about.html"))
);

app.get("/portfolio", (req, res) =>
  res.sendFile(path.join(__dirname, "/views/portfolio.html"))
);

app.use(express.static("public")); //para que cargue la carpeta public

app.listen(port, () => console.log(`app listening on port ${port}!`));
