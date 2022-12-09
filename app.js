const express = require('express')
const bodyparser = require('body-parser');
const { generateOTP, sendEmail, sendEmailHacker, sendEmailTreasure, sendEmailMania, sendEmailSys } = require('./commonfunctions/common')
const emails = require('./models/emails')
const HackerWithUs = require('./models/hacker')
const TreasureHunt = require('./models/treasure')
const InventrixMania = require('./models/mania')
const SavetheSystem = require('./models/sys')
const ContactQuery = require('./models/query')
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
    res.render('contact', { msg: "" })
})

app.post('/contact', async (req, res) => {
    await connect()

    const query = new ContactQuery({
        name: req.body.name,
        email: req.body.email,
        msg: req.body.msg
    })

    query.save((err, result) => {
        if (err) {
            console.error(err)
            res.render('contact', { msg: "Something went Wrong" })
        } else {
            res.render('contact', { msg: "Your query was duly noted" })
        }
    })
})

app.get('/social', (req, res) => {
    res.render('social')
})

app.get('/news', (req, res) => {
    res.render('news')
})

app.get('/events', (req, res) => {
    res.render('event', { msg: "" })
})

//events 
app.get('/events/event1', (req, res) => {
    res.render('events/event1', { msg: "" })
})

// ajax here
app.post('/events/event1', async (req, res) => {
    await connect();
    console.log(req.body)
    var otp = generateOTP()
    const hacker = new HackerWithUs({
        registerid: otp,
        firstname: req.body.first_name,
        middlename: req.body.middle_name,
        lastname: req.body.last_name,
        email: req.body.email,
        rollno: req.body.roll_no,
        phone: req.body.phone_no,
        course: req.body.course,
        department: req.body.department,
        date: new Date()
    })
    hacker.save((err, result) => {
        if (err) {
            console.error(err)
            res.render('events/event1', { msg: "Already Registered" })
        } else {
            sendEmailHacker(req.body.email, otp, "20")
            res.render('events/event1', { msg: "Registered Please Check Your Mail" })
        }
    })
})


app.get('/events/event2', (req, res) => {
    res.render('events/event2', { msg: "" })
})

// ajax here
app.post('/events/event2', async (req, res) => {
    await connect();
    console.log(req.body)
    var otp = generateOTP()
    const hacker = new TreasureHunt({
        registerid: otp,
        grpleadername: req.body.first_name,
        email: req.body.email,
        rollno: req.body.roll_no,
        phone: req.body.phone_no,
        member1name: req.body.first_name1,
        memeber2name: req.body.first_name2,
        member3name: req.body.first_name3,
        member4name: req.body.first_name4,
        course: req.body.course,
        department: req.body.department,
        date: new Date()
    })
    hacker.save((err, result) => {
        if (err) {
            console.error(err)
            res.render('events/event2', { msg: "Already Registered" })
        } else {
            sendEmailTreasure(req.body.email, otp, "20")
            res.render('events/event2', { msg: "Registered Please Check Your Mail" })
        }
    })
})


app.get('/events/event3', (req, res) => {
    res.render('events/event3', { msg: "" })
})

// ajax here
app.post('/events/event3', async (req, res) => {
    await connect();
    console.log(req.body)
    var otp = generateOTP()
    const hacker = new InventrixMania({
        registerid: otp,
        firstname: req.body.first_name,
        middlename: req.body.middle_name,
        lastname: req.body.last_name,
        email: req.body.email,
        rollno: req.body.roll_no,
        phone: req.body.phone_no,
        course: req.body.course,
        department: req.body.department,
        date: new Date()
    })
    hacker.save((err, result) => {
        if (err) {
            console.error(err)
            res.render('events/event3', { msg: "Already Registered" })
        } else {
            sendEmailMania(req.body.email, otp, "20")
            res.render('events/event3', { msg: "Registered Please Check Your Mail" })
        }
    })
})

app.get('/events/event4', (req, res) => {
    res.render('events/event4', { msg: "" })
})

app.post('/events/event4', async (req, res) => {
    await connect();
    console.log(req.body)
    var otp = generateOTP()
    const hacker = new SavetheSystem({
        registerid: otp,
        firstname: req.body.first_name,
        middlename: req.body.middle_name,
        lastname: req.body.last_name,
        email: req.body.email,
        rollno: req.body.roll_no,
        phone: req.body.phone_no,
        course: req.body.course,
        department: req.body.department,
        date: new Date()
    })
    hacker.save((err, result) => {
        if (err) {
            console.error(err)
            res.render('events/event3', { msg: "Already Registered" })
        } else {
            sendEmailSys(req.body.email, otp, "20")
            res.render('events/event3', { msg: "Registered Please Check Your Mail" })
        }
    })
})

app.get('*', (req, res) => {
    res.render('error')
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
