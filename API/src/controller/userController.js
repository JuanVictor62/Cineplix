import CadastrarUsuario, {login} from "../repository/userRepository.js";


 import { Router } from "express";
 const server = Router();

 server.post('/usuario/cadastro', async (req, resp) => {
     try {
       const novoUsuario = req.body;
        if(!novoUsuario.nome.trim())
          throw new Error('Nome é obrigatorio');
        if(!novoUsuario.dtNascimento.trim())
          throw new Error('Data de nascimento é obrigatoria!');
        if(!novoUsuario.telefone.trim())
          throw new Error('Número de telefone é obrigatorio!');
        if(!novoUsuario.email.trim())
          throw new Error('Email é obrigatorio!');
        if(!novoUsuario.senha.trim())
          throw new Error('Crie uma senha para você!');

        const usuarioInserido = await CadastrarUsuario(novoUsuario);
        resp.send(usuarioInserido);
     } catch (err) {
         resp.status(401).send({
            erro: err.message
         });
     }
 })

 server.post('/usuario/login', async (req,resp) => {
  try {
      const {email , senha } = req.body

      const resposta = await login(email, senha);

      if(!resposta) {
          throw new Error ('Credenciais Inválidas')
      }
      resp.send({
          id: resposta.id,
          nome: resposta.nome
      })

  } catch (err) {
      resp.status(401).send({
          erro: err.message
              
      })}
})

export default server;