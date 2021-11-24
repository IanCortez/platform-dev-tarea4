-- Database
CREATE DATABASE pokedex;
USE DATABASE pokedex;


-- Table
CREATE TABLE pokemon (
	int id NOT NULL AUTO_INCREMENT,
	varchar(255) nombre NOT NULL,
	float altura NOT NULL,
	varchar(30) categoria NOT NULL,
	float peso NOT NULL,
	varchar(255) habilidad NOT NULL,
	varchar(255) tipo NOT NULL,
	text url_imagen NOT NULL,
	PRIMARY KEY (id)
);


-- Values
INSERT INTO pokemon
VALUES (1, "Bulbasur", 2.04, "Seed", 15.2, "Overgrow", "Grass", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png");

INSERT INTO pokemon
VALUES (2, "Ivysaur", 3.03, "Seed", 28.7, "Overgrow", "Grass", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png");

INSERT INTO pokemon
VALUES (3, "Venusaur", 6.07, "Seed", 220.5, "Overgrow", "Grass", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png");

INSERT INTO pokemon
VALUES (4, "Charmander", 2.00, "Lizard", 18.7, "Blaze", "Fire", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png");

INSERT INTO pokemon
VALUES (5, "Charmeleon", 3.07, "Flame", 41.9, "Blaze", "Fire", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png");

INSERT INTO pokemon
VALUES (6, "Charizard", 5.07, "Flame", 199.5, "Blaze", "Fire", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png");

INSERT INTO pokemon
VALUES (7, "Squirtle", 1.08, "Tiny turtle", 19.8, "Torrent", "Water", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png");

INSERT INTO pokemon
VALUES (8, "Wartortle", 3.03, "Turtle", 49.6, "Torrent", "Water", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png");

INSERT INTO pokemon
VALUES (9, "Blastoise", 5.03, "Shellfish", 188.5, "Torrent", "Water", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png");