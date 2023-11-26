create database booktech;

create table books (
id integer primary key AUTO_INCREMENT,
nome varchar(100),
custo float,
categoria varchar(100),
volume varchar(100),
status varchar(100),
nota varchar(100),
ranque varchar(100)
);

select * from	books;

-- #(nome, custo, categoria, volume, status, nota, ranque);

-- Exemplo de INSERT INTO para a tabela books
-- INSERT INTO books (nome, custo, categoria, volume, status, nota, ranque)
-- VALUES 
--  ('Livro 1', 19.99, 'Ficção Científica', 'Volume 1', 'Disponível', 'Boa leitura', 'Alto'),
--  ('Livro 2', 24.99, 'Não Ficção', 'Volume 2', 'Indisponível', 'Excelente', 'Médio'),
--  ('Livro 3', 14.99, 'Mistério', 'Volume 3', 'Disponível', 'Bom', 'Baixo');
