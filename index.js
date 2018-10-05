const express = require('express');
const hbs     = require('hbs');
const moment  = require('moment');

var {mongoose}        = require('./db/mongoose');
var {afterMatchVideo} = require('./models/afterMatchVideo');

//Configuracoes
port = process.env.port || 3000;
var app = express();
app.set('view engine', '.hbs');
app.use(express.static(__dirname + '/public'));

//Variaveis do Ambiente
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
    var videoAM = new afterMatchVideo({
        chave: req.params.youtubeID
    });

    videoAM.save().then((doc) => {
        res.send(doc);
    }, (erro) => {
        res.status(400).send(erro);
    });
});

app.get('/aftermatch/list', (req, res) => {
    //retornar uma lista com os 5 ultimos videos.
    videoAM.find().limit(5).then((todos) => {
        res.send(todos);
    }, (e) =>{
        res.status(400).send(erro);
    });
});

app.listen(port,() => {
 console.log(moment().format('YYYYMMDD HH:MM:SS') + ' - Servidor rodando na porta: ' + port);
});