const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3000;

// Serve /public if it exists, otherwise serve root folder
const publicPath = path.join(__dirname, "public");
const serveDir = fs.existsSync(publicPath) ? publicPath : __dirname;

console.log("Serving from:", serveDir);

// Serve static files
app.use(express.static(serveDir));

// Always return index.html for any route
app.get("*", (req, res) => {
  res.sendFile(path.join(serveDir, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
