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

export async function removerFilmeImagensDiferentes(imagens, id) {
    const comando = `
        delete from tb_filme_imagem
              where ds_imagem NOT IN (?) and id_filme = ?
    `

    const [resp] = await con.query(comando, [imagens, id])
    return resp.affectedRows;
}

export async function removerFilmeImagem(idProduto){
    const comando = `
             delete from tb_filme_imagem
                    where id_filme = ?
    `
    const [resp] = await con.query(comando, [idProduto])
    return resp.affectedRows;
}