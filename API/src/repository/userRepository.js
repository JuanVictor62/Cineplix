import { con } from './connection.js'

export default async function CadastrarUsuario(usuario){
    const comando =`
        insert into tb_usuario (nm_usuario, dt_nascimento, nr_telefone, ds_email, ds_senha)
                values(?, ?, ?, ?, ?) `

    const [resposta] = await con.query(comando, [
       usuario.nome, 
       usuario.dtNascimento, 
       usuario.telefone, 
       usuario.email, 
       usuario.senha]);
   usuario.id = resposta.insertId;
   return usuario;
}

export async function login(email, senha) {
    const comando = 
    `     
    select id_usuario					id,
    nm_usuario					nome
    from tb_usuario
    where nm_usuario = ?
    and ds_senha = ?`

    const [linhas] = await con.query(comando, [email, senha])
    return linhas[0];
}