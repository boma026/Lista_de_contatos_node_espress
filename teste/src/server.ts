import express from "express";
import helmet from "helmet";
import router from "./routes";

const server = express();
server.use(helmet());
server.use(express.json());

server.use("/", router);

server.listen(3001, () => {
    console.log("Servidor rodando em: http://localhost:3001");
})
