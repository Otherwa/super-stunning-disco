const express = require('express')
const bodyparser = require('body-parser');
const { sendEmail } = require('./commonfunctions/common')
const registers = require('./models/emails')
const { connect, dis } = require('./config/connect')

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
app.post('/', async (req, res) => {
    await connect();

    var date = new Date()
    const users = new registers({
        email: req.body.email,
        date: date
    })

    users.save(err => {
        if (err) {
            res.send("404").status(404)
        } else {
            res.send("200").status(200)
            sendEmail(req.body.email)
        }
    })

})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.get('/event', (req, res) => {
    res.render('event')
})

app.get('/event/hwu', (req, res) => {
    res.render('events/evnt1')
})

app.get('/social', (req, res) => {
    res.render('social')
})

app.get('/news', (req, res) => {
    res.render('news')
})


app.get('*', (req, res) => {
    res.render('error')
})
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
