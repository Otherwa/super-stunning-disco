const express = require('express')
const bodyparser = require('body-parser');
const { sendEmail } = require('./commonfunctions/common')
const emails = require('./models/emails')
const registers = require('./models/registers')
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
    const email = new emails({
        email: req.body.email,
        date: date
    })

    email.save((err, result) => {
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
    res.render('event', { msg: "" })
})

app.post('/event', async (req, res) => {
    await connect()

    console.log(req.body)

    var date = new Date()

    const users = new registers({
        firstName: req.body.first_name,
        middleName: req.body.middle_name,
        lastName: req.body.last_name,
        email: req.body.email,
        rollno: req.body.roll_no,
        date: date
    })

    users.save((err) => {
        if (err) {
            console.log(err)
            res.render('event', { msg: "Already Exists" })
        }
        else {
            sendEmail(req.body.email)
            res.render('event', { msg: "Submitted" })
        }
    })


})

app.get('*', (req, res) => {
    res.render('error')
})
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
