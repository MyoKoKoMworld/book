import express from "express";
import cors from "cors";
import { PORT, mongoDBURL } from "./config.js";
import bookRoute from "./router/bookRoute.js";
import mongoose from "mongoose";
const app = express();

app.use(cors());
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.use(express.json());
app.use("/books", bookRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
