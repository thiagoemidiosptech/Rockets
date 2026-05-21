CREATE DATABASE rockets;

USE rockets;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE quiz (
	idQuiz INT PRIMARY KEY AUTO_INCREMENT,
	acertos INT,
	erradas INT,
    nome VARCHAR(50)
);

select * from usuario;

select * from quiz;