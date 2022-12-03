import {listarClassificacao, listarGenero, listarIdioma, salvarFilme, salvarFilmeImagem } from "../repository/filmeRepository.js"; 

import { Router } from "express";
import multer from 'multer'
import { validarFilme } from "../services/validarFilme.js";
const server = Router();

const upload = multer({ dest: 'storage/fotoFilme' })

//GET

server.get('/get/genero', async (req, resp) => {
    try {
        const linhas = await listarGenero();
        resp.send(linhas);
    }
    catch (err) {
        console.log(err)
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/get/classificacao', async (req, resp) => {
    try {
        const linhas = await listarClassificacao();
        resp.send(linhas);
    }
    catch (err) {
        console.log(err)
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/get/idioma', async (req, resp) => {
    try {
        const linhas = await listarIdioma();
        resp.send(linhas);
    }
    catch (err) {
        console.log(err)
        resp.status(400).send({
            erro: err.message
        })
    }
})


//POST

server.post('/insert/filme', async (req,resp) => {
    try {
        const filme = req.body;

        await validarFilme(filme);

        const idFilme = await salvarFilme(filme)

        resp.send({
            id: idFilme
        });

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

//PUT

server.put('/insert/filme/:id/imagem', upload.array('imagens'), async (req, resp) => {
    try {
        const id = req.params.id;
        const imagens = req.files;

        for (const imagem of imagens) {
            await salvarFilmeImagem(id, imagem.path)
        }

        resp.status(204).send();
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
        console.log(err)
    }

})

export default server;