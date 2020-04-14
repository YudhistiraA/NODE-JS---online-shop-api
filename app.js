require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/users/user.router");
const barangRouter = require("./barang/barang.router");
const transaksiRouter = require("./transaksi/transaksi.router");
app.use(express.json());
app.use("/barang/users",barangRouter);
app.use("/api/users",userRouter);
app.use("/transaksi/users",transaksiRouter);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});