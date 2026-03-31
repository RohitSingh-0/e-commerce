import express from "express";
import router from "./modules/auth/auth.routes.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/auth", router);

const p = new Promise((resolve, reject) => {
  resolve(10);
});
p.then((value) => {
  console.log(value); // 10
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});