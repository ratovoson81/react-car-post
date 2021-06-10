import { json } from "body-parser";
import express from "express";
import { routerCar } from "./routes/car";
import mongoose from "mongoose";
import http from "http";
import { routerUser } from "./routes/User";

const app = express();
app.use(json());

const server = http.createServer(app);

mongoose
  .connect(
    "mongodb+srv://test:test@cluster0.cp0og.mongodb.net/test?retryWrites=true&w=majority",
    { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((error) => console.log(error));

app.use("/car", routerCar);
app.use("/user", routerUser);

server.listen(3000, () => {
  console.log("serveur start on port 3000");
});
