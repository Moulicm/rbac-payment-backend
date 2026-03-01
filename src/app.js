require("dotenv").config();
const express = require("express");
const authRoutes = require("./modules/auth/auth.routes");
const userRoutes = require("./modules/users/user.routes");
const paymentRoutes = require("./modules/payments/payment.routes");

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/payments", paymentRoutes);

module.exports = app;