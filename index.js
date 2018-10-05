const express = require('express');
const hbs     = require('hbs');
const moment  = require('moment');

//Configuracoes
port = process.env.port || 3000;
var app = express();
app.set('view engine', '.hbs');
app.use(express.static(__dirname + '/public'));

//
hbs.registerPartials(__dirname+'/views/partials');

hbs.registerHelper('getCurrentTimeFormat', () => {
    return moment().format('YYYYMMDD HH:MM:SS');
});

//Middleware
app.use(express.static(__dirname + '/public'));

//Rotas
app.get('/teste', (req, res) => {
    res.render('test', { 
        pageTitle: 'Página de Teste',        
     });
});

//Rotas AFTER MATCH
app.put('/aftermatch/:youtubeID', (req, res) => {
    //Inserir a ID do Youtube no banco de dados.
});

app.get('/aftermatch/list', (req, res) => {
    //retornar uma lista com os 5 ultimos videos.
});

app.listen(port,() => {
 console.log(moment().format('YYYYMMDD HH:MM:SS') + ' - Servidor rodando na porta: ' + port);
});