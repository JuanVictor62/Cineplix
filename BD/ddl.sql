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
    id_categoria		int,
    nm_filme			varchar(100),
    ds_sinopse			varchar(500),
    ds_classificacao	varchar(10),
    ds_duracao			varchar(500)
);

create table tb_genero(
	id_categoria		int primary key auto_increment,
    nm_genero			varchar(50)
);