import {inserirPedidoItem, listarClassificacao, listarGenero, listarIdioma, ListarTodasImagensporId, listarTodos, ListarTodosFilmePorId, salvarFilme, salvarFilmeImagem } from "../repository/filmeRepository.js"; 

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

server.get('/admin/filme/:id', async (req, resp) => {
    try{
        const id = req.params.id;

        const filme =  await ListarTodosFilmePorId(id);
        const imagens = await ListarTodasImagensporId(id);

        resp.send({
            info: filme,
            imagens: imagens
    })

    }
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
        console.log(err)
    }
}
)

server.get('/admin/listar', async (req, resp) => {
    try {
        const r = await listarTodos();
        resp.send(r)
    } catch (err) {
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

server.post('/api/pedido/:idUsuario', async (req, resp) => {
    try{
        const { idUsuario } = req.params;
        const info = req.body;

        // const novoPedido = criarNovoPedido(idUsuario, idCupom, info);
        // console.log(novoPedido)
        // await validarnovoPedido(novoPedido);
        // await validarPagamento(info.cartao)
        // const idPedidoCriado = await inserirPedido(novoPedido);
        // await inserirPagamento(idPedidoCriado, info.cartao);
        // console.log(inserirPagamento)
        

        // for (let item of info.produtos) {
        //     const prod = await ListarTodosProdutosPorId(item.id);
            const idPedido = await inserirPedidoItem(idUsuario, info);
        // }

        resp.status(204).send();
        
    }
    catch (err) {
        console.log(err)
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