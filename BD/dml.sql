use cineplixBD;

insert into tb_genero (nm_genero)
	values ("Ação");
    
insert into tb_genero(nm_genero)
	values ("Aventura");

insert into tb_genero(nm_genero)
	values ("Comédia");
    
insert into tb_genero(nm_genero)
	values ("Fantasia");
    
insert into tb_genero(nm_genero)
	values ("Guerra");
    
insert into tb_genero(nm_genero)
	values ("Musicais");
    
insert into tb_genero(nm_genero)
	values ("Romance");

insert into tb_genero(nm_genero)
	values ("Terror");
    
insert into tb_genero(nm_genero)
	values ("Drama");
    
select * from tb_genero;

insert into tb_classificacao(nm_classificacao)
	values ("L");

insert into tb_classificacao(nm_classificacao)
	values (10);
    
insert into tb_classificacao(nm_classificacao)
	values (12);
    
insert into tb_classificacao(nm_classificacao)
	values (14);
    
insert into tb_classificacao(nm_classificacao)
	values (16);
    
insert into tb_classificacao(nm_classificacao)
	values (18);
    
select * from tb_classificacao;

insert into tb_idioma (nm_idioma)
	values ("Dublado");
    
insert into tb_idioma (nm_idioma)
	values ("Legendado");
    
select * from tb_idioma;

select * from tb_filme;

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
    
select * from tb_filme;

select * from tb_filme_imagem;


select 
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
	where id_filme = 1;
    
		select ds_imagem as id
			from tb_filme_imagem
		where id_filme = 1;
        
		use cineplixBD;
        
        select * from tb_usuario;
        
        
                INSERT INTO tb_pedido_item (
            id_usuario as id ,
            id_filme as idFilme,
            qtd_int as ingressoInt,
            qtd_meia as ingressoMeia,
            vl_adicionais as adicionais,
            vl_total as total
        )
        VALUES (?, ?, ?, ?, ?, ?)