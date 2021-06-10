import { json } from "body-parser";
import express from "express";
import { routerCar } from "./routes/car";

const app = express();
app.use(json());

app.use(routerCar);

app.listen(3000, () => {
  console.log("serveur start on port 3000");
});
