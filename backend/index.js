const mysql = require('mysql');
const express = require('express');
const cors = require('cors');

var app = express();
app.use(cors());
app.use(express.json());



// GET methods
app.get('/pokemons', function(req, res){
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'utec',
		password: '1234567890',
		database: 'pokedex'
	});

	connection.connect();

	var query = "SELECT * FROM pokemon";

	connection.query(query, function(error, results, fields){
		if(error) throw error;

		res.send(results);
		connection.end();
	});
});


app.get('/pokemons/:id', function(req, res){
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'utec',
		password: '1234567890',
		database: 'pokedex'
	});

	connection.connect();

	var query = "SELECT * FROM pokemon WHERE id = ?;";
	var values = [req.params.id];

	connection.query(query, values, function(error, results, fields){
		if(error) throw error;
		
		res.send(results[0]);
		connection.end();
	});
});



// POST methods
app.post('/pokemons', function(req, res){
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'utec',
		password: '1234567890',
		database: 'pokedex'
	});

	connection.connect();

	var query = "INSERT INTO pokemon (nombre, altura, categoria, peso, tipo, url_imagen)" +
		     "VALUES (?, ?, ?, ?, ?, ?)";
	var values = [req.body.nombre, req.body.altura, req.body.categoria, req.body.peso, req.body.tipo, req.body.url_imagen];

	connection.query(query, values, function(error, results, fields){
		if(error) throw error;

		res.send(results);
		connection.end();
	});
});



// PUT methods
app.put('/pokemons/:id', function(req, res){
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'utec',
		password: '1234567890',
		database: 'pokedex'
	});

	connection.connect();

	var query = "UPDATE pokemon SET ";
	var values = [];

	if(req.body.nombre){
		query += " "
	}
});



// DELETE methods
app.delete('/pokemons/:id', function(req, res){
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'utec',
		password: '1234567890',
		database: 'pokedex'
	});

	connection.connect();

	var query = "DELETE FROM pokemon WHERE id = ?;";
	var values = [req.params.id];

	connection.query(query, values, function(error, results, fields){
		if(error) throw error;

		res.send(results);
		connection.end();
	})
});