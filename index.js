var express = require('express')
var app = express()

const fs = require('fs')
const join = require('path').join
const models = join(__dirname, 'models')
// Bootstrap models
fs.readdirSync(models)
  .filter(file => ~file.search(/^[^\.].*\.js$/))
    .forEach(file => require(join(models, file)))

//解析客户端发送的post数据
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


global.config =  require('./config')


//数据库初始化
var DatebaseInit = require('./boot/databaseInit')
DatebaseInit()

//路由初始化
var RoutersInit = require('./boot/routersInit')
RoutersInit(app)


app.listen(config.port, () => { 
    console.log('listen port http://127.0.0.1:'+config.port)
})