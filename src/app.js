import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const server = express();

server.use(express.json());
server.use(cors());
server.use(router);

const port = process.env.PORT;
server.listen(port, () => {
  console.log(`Servidor conectado a porta ${port}`);
});
