const express = require("express");
const spdy = require("spdy");
const compression = require("compression");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 8080;
const buildLocation = "dist/final";

app.use(compression());
app.use(express.static(buildLocation));
app.use((req, res, next) => {
  if (!req.originalUrl.includes(buildLocation)) {
    res.sendFile(`${__dirname}/${buildLocation}/index.html`);
  } else {
    next();
  }
});

const options = {
  key: fs.readFileSync(path.join(__dirname, "/server.key")),
  cert: fs.readFileSync(path.join(__dirname, "/server.crt")),
};

spdy.createServer(options, app).listen(port, error => {
  if (error) {
    console.error(error);
    return process.exit(1);
  } else {
    console.log(`HTTP/2 server listening on port: ${port}`);
  }
});
