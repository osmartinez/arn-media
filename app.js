const express = require ('express')
const exphbs = require('express-handlebars')
const path = require('path')
const helmet = require('helmet')

// inicializar
const app = express()

// configuracion
app.set('port',process.env.PORT || 3000)
app.set('views',path.join(__dirname,'src/views'))
app.engine('.hbs',exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs',
}))
app.set('view engine', '.hbs')

// middleware
//app.use(helmet())

//const expiryDate = new Date( Date.now() + 60 * 60 * 1000 ); // 1 hour


// routes
app.use(require('./src/routes'))
//app.use('/.well-known', require('./src/routes/letsencrypt'))

// public
app.use(express.static(path.join(__dirname,'src/public')))

// start server
const server = app.listen(app.get('port'),()=>{
    console.log('Listening on port ',app.get('port'))  
})


module.exports = server
