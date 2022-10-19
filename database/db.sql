CREATE DATABASE database_challenge;

USE database_challenge;

CREATE TABLE clientes(
    id INT(11) NOT NULL,
    nombre VARCHAR(20) NOT NULL,
    apellido VARCHAR(20) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    domicilio VARCHAR(50) NOT NULL,
    telefono VARCHAR(15) NOT NULL,
    email VARCHAR(50) NOT NULL
);

ALTER TABLE clientes
        ADD PRIMARY KEY (id);

ALTER TABLE clientes 
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE clientes;


