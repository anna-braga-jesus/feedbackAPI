import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { usersRouter } from "./routes/users-route.js";
dotenv.config();

const app = express();

app
  .use(cors())
  .use(express.json())
  .get("/status", (req, res) => {
    res.sendStatus(201);
  })
  .use("/", usersRouter);
const PORT = process.env.PORT || 4000;
app.listen(4001, () => {
  console.log(`Listening on port ${PORT}`);
});
