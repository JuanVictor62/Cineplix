import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import UserController from './controller/userController.js'

const server = express();

server.use(cors());
server.use(express.json());

server.use(UserController);

server.listen(process.env.PORT, 
        () => console.log(`API online na porta ${process.env.PORT}`));