const path = require('path')
const express = require('express')

const app = express()
const port = process.env.PORT ||3000

const publicDirectoryPath = path.join(__dirname,'../public')
const viewPath  = path.join(__dirname,'../templates/views')

app.set('view engine','hbs')
app.set('views', viewPath)

app.use(express.static(publicDirectoryPath))

app.get('', (req,res) =>{
    res.render('index', {
        name: 'mayank'
    })
})

app.listen(port, ()=>{
    console.log('server is up on the'+port);
})