import express from 'express';

//libs 
const app = express()
const port = process.env.PORT || 3000

//test12
// extensions
app.use(express.static('public'))
app.set('view engine', 'ejs');

// main route
app.get('/', (req, res) => {
    res.render('index')
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