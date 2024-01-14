import express from "express";
import initDB from "../database/db.js";
const app = express();
const port = 3003;

app.listen(port, () => {
  console.log(`El servidor está escuchando en el puerto ${port}`);
});

initDB();