import express from 'express';

//libs 
const app = express()
const port = process.env.PORT || 3000


// extensions
app.use(express.static('public'))
app.set('view engine', 'ejs');

// main route
app.get('/', (req, res) => {
    res.render('index', {})
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})