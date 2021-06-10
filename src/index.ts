import { json } from "body-parser";
import express from "express";
import { routerCar } from "./routes/car";
import mongoose from "mongoose";
import http from "http";

const app = express();
app.use(json());

const server = http.createServer(app);

mongoose
  .connect(
    "mongodb+srv://test:test@cluster0.cp0og.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((error) => console.log(error));

app.use("/car", routerCar);

server.listen(3000, () => {
  console.log("serveur start on port 3000");
});
