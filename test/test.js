var request = require('supertest');
var express = require('express');

var app = express();

app.get('/', function(req, res) {
	res.send('hello jenkins');
});

describe( "TESTING RESPONSE", function() {
	it ( "GETTING RESPONSE", function(done) {
		request(app).get('/').expect( 'hello world', done );
	});
});
