var express = require('express')
var path = require('path')
var router = require('./router')
var bodyParser = require('body-parser')
var session = require('express-session')
var app = express()

app.use('/public/', express.static(path.join(__dirname,'./public/')))

app.engine('html', require('express-art-template'))
app.set('views',path.join(__dirname,'./views/'))


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))


app.use(router)



app.listen(5000,function(){
	console.log('runing..')
})

