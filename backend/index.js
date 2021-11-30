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

	var query = "SELECT id, nombre, altura, categoria, peso, habilidad, tipo, url_imagen FROM pokemon";

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

	var query = "SELECT id, nombre, altura, categoria, peso, habilidad, tipo, url_imagen FROM pokemon WHERE id = ?;";
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

	var query = "INSERT INTO pokemon (nombre, altura, categoria, peso, tipo, habilidad, url_imagen, modified_date) " +
		     "VALUES (?, ?, ?, ?, ?, ?, ?, NOW());";
	var vals = [req.body.nombre, req.body.altura, req.body.categoria, req.body.peso, req.body.tipo, req.body.habilidad,
		 req.body.url_imagen];

	connection.query(query, vals, function(error, results, fields){
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

	var query = "UPDATE pokemon SET modified_date = NOW()";
	var values = [];

	if(req.body.nombre){
		query += ", nombre = ? ";
		values.push(req.body.nombre);
	}
	if(req.body.altura){
		query += ", altura = ? ";
		values.push(req.body.altura);
	}
	if(req.body.categoria){
		query += ", categoria = ? ";
		values.push(req.body.categoria);
	}
	if(req.body.peso){
		query += ", peso = ? ";
		values.push(req.body.peso);
	}
	if(req.body.tipo){
		query += ", tipo = ? ";
		values.push(req.body.tipo);
	}
	if(req.body.url_imagen){
		query += ", url_imagen = ?";
		values.push(req.body.url_imagen);
	}

	query += " WHERE id = ?;";
	values.push(req.params.id);

	connection.query(query, values, function(error, results, fields){
		if(error) throw error;

		res.send(results);
		connection.end();
	});
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
	});
});


// Server start
app.listen(3000, function(){
	console.log("Server started");
})