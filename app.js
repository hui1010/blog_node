const express = require('express') //return a function

//3rd party middleware
const morgan = require('morgan')

// express app
const app = express() // invode that function to create a instance of an express app, stored in the const app

// register view engine
app.set('view engine', 'ejs') //by default express and ejs will look for the views folder 

// listen for request
app.listen(3000) // automatically localhost, return an instance of server, can be stored in to a const server



app.use(morgan('dev'))//other options: 'tiny'

//middleware & static files - images and css files which are public
app.use(express.static('public'))//pass in a folder name

app.get('/', (req, res) => {//path, function for get(), everything send from the address bar is get method
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Yoshi finds a lot of eggs on his way back home'},
        {title: 'Mario finds stars', snippet: 'Mario wanted starts and he found quite a lot eventually'},
        {title: 'Bowser finds mushrooms', snippet: 'Bowser wants to eat mushrooms so he can make mushroom soup'}
    ]

    /* EJS */
    res.render('index', {title: 'Home', blogs}) //first parameter: the page, second parameter: data - an object
})
app.get('/about', (req, res) => {
    //EJS
    res.render('about', {title: 'About'})
})

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create'})
})

// 404 pages
app.use((req, res) => {
    res.status(404).render('404', {title: '404'})
})
