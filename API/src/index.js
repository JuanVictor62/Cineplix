import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import UserController from './controller/userController.js'
import filmeController from './controller/filmeController.js'

const server = express();

server.use(cors());
server.use(express.json());

server.use(UserController);
server.use(filmeController);

server.use('/storage/fotoFilme', express.static('storage/fotoFilme'));

server.listen(process.env.PORT, 
        () => console.log(`API online na porta ${process.env.PORT}`));