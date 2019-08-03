var http = require('http');

var server = http.createServer( function (req, res){

	var categoria = req.url;
	var resposta;

	switch (categoria) {
		case '/moda':
			resposta = "<html><body>Pagina de Moda</body></html>"; 
			break;
		case '/tecnologia':
			resposta = "<html><body>Pagina de Tecnologia</body></html>";
			break;
		case '/':
			resposta = "<html><body>Pagina Principal</body></html>";
			break;
		default:
			resposta = "<html><body>Pagina Nao Encontrada</body></html>"
	}

	res.end(resposta);
});

server.listen(3000);
