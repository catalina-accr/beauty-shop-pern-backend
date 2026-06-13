const express = require("express");

const productRoutes = require("./routes/productRoutes");

const loggerMiddleware = require("./middlewares/loggerMiddleware");

const app = express();

app.use(express.json());

app.use(loggerMiddleware);

app.get("/", (req, res) => {
  res.json({
    message: "Beauty Shop API Running",
  });
});

app.use("/api/products", productRoutes);

module.exports = app;