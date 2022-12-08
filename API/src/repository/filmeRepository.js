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

export async function ListarTodosFilmePorId(id) {
 
    const comando = `select 
                        tb_filme.id_filme as id,
                        nm_filme as nome,
                        ds_sinopse as sinopse,
                        ds_duracao as duracao,
                        nm_genero as genero,
                        nm_classificacao as classificacao,
                        nm_idioma as idioma
                    from tb_filme
                        inner join tb_genero
                            on tb_genero.id_genero = tb_filme.id_genero
                        inner join tb_classificacao
                            on tb_classificacao.id_classificacao = tb_filme.id_classificacao
                        inner join tb_idioma
                            on tb_idioma.id_idioma = tb_filme.id_idioma
                        where id_filme = ?;
                    `
  
    const [linhas] = await con.query(comando, [id]);
    return linhas[0];
  }

  export async function ListarTodasImagensporId(idProduto) {
 
    const comando = `    select ds_imagem as id
                            from tb_filme_imagem
                        where id_filme = ?;
                    `

    const [linhas] = await con.query(comando, [idProduto]);
    return linhas.map(item => item.id);
}

export async function listarTodos(){
    const comando = `
            select 
            tb_filme.id_filme as id,
            nm_filme as nome,
            ds_sinopse as sinopse,
            ds_duracao as duracao,
            nm_genero as genero,
            nm_classificacao as classificacao,
            nm_idioma as idioma,
            ds_imagem as imagem
        from tb_filme
            inner join tb_genero
                on tb_genero.id_genero = tb_filme.id_genero
            inner join tb_classificacao
                on tb_classificacao.id_classificacao = tb_filme.id_classificacao
            inner join tb_idioma
                on tb_idioma.id_idioma = tb_filme.id_idioma
            inner join tb_filme_imagem
                on tb_filme_imagem.id_filme = tb_filme.id_filme
            group by tb_filme.id_filme;
    `

    const [linhas] = await con.query(comando);
    return linhas;
}

export async function inserirPedidoItem(idUsuario, info) {
    const comando = `
        INSERT INTO tb_pedido_item (
            id_usuario,
            id_filme,
            qtd_int,
            qtd_meia,
            vl_adicionais,
            vl_total
        )
        VALUES (?, ?, ?, ?, ?, ?)
    `

    const [filme] = await con.query(comando, [idUsuario, 
        info.idFilme,
        info.qtdInt, 
        info.qtdMeia, 
        info.adicionais, 
        info.total]);
    return filme.affectedRows;
}

export async function inserirPagamento(idPedido, novoPagamento) {
    const comando = `
        INSERT INTO tb_pagamento_cartao (
            id_pedido,
            nm_cartao,
            nr_cartao,
            dt_vencimento,
            cod_seguranca,
            nr_parcelas,
            ds_forma_pagamento 
        )
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `

    const [info] = await con.query(comando, [
        idPedido,
        novoPagamento.nome,
        novoPagamento.numero,
        novoPagamento.vencimento,
        novoPagamento.codSeguranca,
        novoPagamento.parcelas,
        novoPagamento.formaPagamento
    ]);
    return info.affectedRows;
}