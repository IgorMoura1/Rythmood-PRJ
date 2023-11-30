create database rythmood;
USE rythmood;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50));
    

create table ranking (
idRanking int primary key auto_increment,
score int,
fkUsuario int, foreign key (fkUsuario) references usuario(id));

create table playlist (
idPlaylist int primary key,
genero varchar(3),
fkUsuario int, foreign key (fkUsuario) references usuario(id));

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
select * from playlist;
select * from formulario;



-- select para jogar no ranking na dashboard --
select score, nome from ranking join usuario on id = fkUsuario order by score desc;

-- select para jogar no ranking na dashboard --
select score as Pontuação, nome as Nome from ranking join usuario on fkUsuario = id order by score desc limit 5;


-- select para jogar no gráfico dashboard
select score as pontuacao, count(score) as qtdPessoasQueAcertaram from ranking group by score order by score;

-- select para mostrar qual opção do banco de dados foi mais selecionado
select humor, count(humor) from formulario group by humor limit 1;
select genero, count(genero) from formulario group by genero limit 1;
select descoberta, count(descoberta) from formulario group by descoberta limit 1;
select nacionalidade, count(nacionalidade) from formulario group by nacionalidade limit 1;
select mscImportante, count(mscImportante) from formulario group by mscImportante limit 1;













