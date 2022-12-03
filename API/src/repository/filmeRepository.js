import { con } from './connection.js'

export async function salvarFilme(filme) {
    const comando = `
        insert into tb_filme (nm_filme, ds_sinopse, ds_duracao, id_genero, id_classificacao, id_idioma)
                        values (?, ?, ?, ? ,? ,?)
    `

    const [resp] = await con.query(comando, [
        filme.nome,
        filme.sinopse,
        filme.duracao,
        filme.idGenero,
        filme.idClassificacao,
        filme.idIdioma
    ])
    return resp.insertId;
}

export async function salvarFilmeImagem(idProduto, imagemPath) {
    const comando = `
        insert into tb_filme_imagem (id_filme, ds_imagem)
                                  values (?, ?)
    `

    const [resp] = await con.query(comando, [idProduto, imagemPath]);
}

export async function listarGenero(){
    const comando = `
        select 
            id_genero as id,
            nm_genero as genero
            from tb_genero
    `
    const [resp] = await con.query(comando);
    return resp;
}

export async function listarClassificacao(){
    const comando = `
        select 
            id_classificacao as id,
            nm_classificacao as classificacao
            from tb_classificacao
    `
    const [resp] = await con.query(comando);
    return resp;
}

export async function listarIdioma(){
    const comando = `
        select 
            id_idioma as id,
            nm_idioma as idioma
            from tb_idioma
    `
    const [resp] = await con.query(comando);
    return resp;
}