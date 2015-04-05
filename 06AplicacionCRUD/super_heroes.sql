CREATE DATABASE	super_heroes;
USE super_heroes;

/*Tabla de Datos*/
CREATE TABLE heroes(
	id_heroe INT NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(20) NOT NULL,
	imagen VARCHAR(100) NOT NULL,
	descripcion TEXT NULL,
	editorial INT NOT NULL,
	PRIMARY KEY(id_heroe)
)ENGINE=MyISAM DEFAULT CHARSET = UTF8;

/*Tabla Catálogo*/
CREATE TABLE editorial(
	id_editorial INT NOT NULL AUTO_INCREMENT,
	editorial VARCHAR(15) NOT NULL,
	PRIMARY KEY(id_editorial)
)ENGINE=MyISAM DEFAULT CHARSET = UTF8;

INSERT INTO editorial
	(id_editorial,editorial) 
	VALUES 
	(1,"DC Comics"),
	(2,"Marvel Comics"),
	(3,"Shonen Jump"),
	(4,"Vértigo"),
	(5,"Mirage Studio"),
	(6,"Icon Comics");