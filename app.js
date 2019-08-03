var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
        res.render("home/index"); // o view engine já sabe que o arquivo tem a extensão .ejs
});

app.get('/formulario_inclusao_noticia', function(req, res) {
	res.render("admin/form_add_noticia");
});

app.get('/noticias', function(req, res) {
	res.render("noticias/noticias");
});

app.listen(3000, function (){
	console.log("servidor rodando com express");
});
