const express = require('express')
const bodyparser = require('body-parser');
const { sendEmail } = require('./commonfunctions/common')

//libs 
const app = express()

const port = process.env.PORT || 3000

app.use(bodyparser.urlencoded({ extended: false }))
app.use(express.static('public'))
app.set('view engine', 'ejs');

// main route
app.get('/', (req, res) => {
    res.render('index')
})

// ajax here
app.post('/', (req, res) => {
    var email = req.body.email
    sendEmail(email)
    res.send("200")
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.get('*', (req, res) => {
    res.render('error')
})
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})