CREATE DATABASE carrefour;
CREATE TABLE mensagens (
id SERIAL PRIMARY KEY,
nome varchar(50) ,
email varchar (50) ,
comentario varchar(100)
);
-- CREATE TABLE sessions(id SERIAL PRIMARY KEY, email varchar(50), );
INSERT INTO mensagens (id, nome, email, comentario) VALUES (1, 'Anna', 'annajesus.nave@gmail.com', 'Tentativa');
