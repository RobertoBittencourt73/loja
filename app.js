const express = require('express')
const parser = require('body-parser')
const handlebars = require('express-handlebars')
const mysql = require('mysql')
const urlParser = parser.urlencoded({extended: false})
const app = express()
const sql = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306
})
sql.query('use loja')

app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use('/css', express.static('css'))
app.use('/img', express.static('img'))
app.use('/js', express.static('js'))

app.get('/', function(req,res){
    res.render('index')
})
app.get('/home', function(req,res){
    res.render('home')
})
app.post('/home',urlParser, function(req, res){
   if(req.body.nome == '' || req.body.cpf == '' || req.body.senha == '' || req.body.confSenha == '' || req.body.dtNasc==''){
         
            res.send('<h1>Error</h1><h2>Os campos Nome, Cpf, Senha, Confirmar Senha e Data de Nascimento são obrigatórios</h2>')

          }else{
       if(req.body.senha === req.body.confSenha){
            sql.query('insert into usuario values(default,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[req.body.nome, req.body.rg, req.body.cpf, req.body.ctps, req.body.senha, req.body.dtNasc, req.body.sexo, req.body.endereco, req.body.num, req.body.comp, req.body.bairro, req.body.cidade, req.body.uf, req.body.tel, req.body.cel, req.body.whats, req.body.email, req.body.obs, 18/08/2020, 18/08/2020 ])

            res.render('home')
       }else{
           res.send('senha e confirmar senha nao combinam')
       }    
    } 
})


app.listen('8081', function(req,res){
    console.log('servidor rodando')
})