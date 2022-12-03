import { removerFilmeImagem, removerFilmeImagensDiferentes, salvarFilme, salvarFilmeImagem } from "../repository/filmeRepository.js"; 

import { Router } from "express";
import multer from 'multer'
import { validarFilme } from "../services/validarFilme.js";
const server = Router();

const upload = multer({ dest: 'storage/fotoFilme' })

server.post('/admin/filme', async (req,resp) => {
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

server.put('/admin/filme/:id/imagem', upload.array('imagens'), async (req, resp) => {
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