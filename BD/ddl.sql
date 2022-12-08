create database cineplixBD;

use cineplixBD;

create table tb_usuario(
	id_usuario 			int primary key auto_increment,
    nm_usuario			varchar(100),
	dt_nascimento		date,
    nr_telefone			varchar(100),
	ds_email			varchar(100),
    ds_senha			varchar(50)
);

create table tb_filme(
	id_filme			int	primary key	auto_increment,
    nm_filme			varchar(100),
    ds_sinopse			varchar(500),
    ds_duracao			int,
	id_genero		int,
    id_classificacao	int,
    id_idioma			int
);

create table tb_filme_imagem (
    id_filme_imagem int primary key auto_increment,
	id_filme int,
    ds_imagem varchar(500),
    foreign key (id_filme)
        references tb_filme (id_filme)
);

create table tb_genero(
	id_genero			int primary key auto_increment,
    nm_genero			varchar(50)
);

create table tb_classificacao(
	id_classificacao	int primary key auto_increment,
	nm_classificacao	varchar(10)
);

create table tb_idioma(
	id_idioma			int primary key auto_increment,
    nm_idioma			varchar(50)
);

create table tb_pedido_item(
	id_pedido			int primary key auto_increment,
	id_usuario			int,
    id_filme			int,
    qtd_int				int,
    qtd_meia			int,
    vl_adicionais		decimal(15,2),
    vl_total			decimal(15,2),
    foreign key (id_filme)	references tb_filme(id_filme),
	foreign key (id_usuario) references tb_usuario (id_usuario)
);

create table tb_pagamento_cartao(
	id_pagamento_cartao	int primary key auto_increment,
    id_pedido			int,
    nm_cartao			varchar(200),
	nr_cartao			varchar(200),
    dt_vencimento		varchar(200),
    cod_seguranca		varchar(200),
    nr_parcelas			int,
    ds_forma_pagamento	varchar(200),
    foreign key (id_pedido)	references tb_pedido_item(id_pedido)
);
