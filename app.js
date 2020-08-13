const express = require('express')
const parser = require('body-parser')
const handlebars = require('express-handlebars')
const mysql = require('mysql')
const urlParser = parser.urlencoded({extended: false})
const app = express()

app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use('/css', express.static('css'))

app.get('/', function(req,res){
    res.render('index')
})
app.get('/home', function(req,res){
    res.render('home')
})


app.listen('8081', function(req,res){
    console.log('servidor rodando')
})