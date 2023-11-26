
USE rythmood;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
    fkPlaylist int, constraint fkPlay foreign key (fkPlaylist) references playlist(idPlaylist),
    fkRanking int, constraint fkRank foreign key (fkRanking) references ranking(idRanking));
    

create table ranking (
idRanking int primary key auto_increment,
score int);

create table playlist (
idPlaylist int primary key,
genero varchar(3));

create table formulario (
idFormulario int primary key auto_increment,
humor varchar(25),
genero varchar(25),
descoberta varchar(25),
nacionalidade varchar(25),
mscImportante varchar(25),
fkUsuario int, foreign key (fkUsuario) references usuario(id), 
constraint humor check (humor = 'Feliz' or humor = 'Triste' or humor = 'Alegre' or humor = 'Raiva' or humor = 'Neutro'),
constraint genero check (genero = 'Dance/eletrônica' or genero = 'Rock' or genero = 'Jazz' or genero = 'R&B' or genero = 'Pop' or genero = 'Rap' or genero = 'Funk' or genero = 'Pagode' or genero = 'Sertanejo' or genero = 'MPB'),
constraint descoberta check (descoberta = 'Streaming' or descoberta = 'Sociais' or descoberta = 'Amigos' or descoberta = 'Propria' or descoberta = 'Radio'),
constraint nacionalidade check (nacionalidade = 'Internacional' or nacionalidade = 'Nacional'),
constraint mscImportante check (mscImportante = 'Letras' or mscImportante = 'Melodia'));


select * from usuario;
select * from ranking;






