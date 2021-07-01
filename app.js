const express = require('express') //return a function

//3rd party middleware
const morgan = require('morgan')

// express app
const app = express() // invode that function to create a instance of an express app, stored in the const app


// register view engine
app.set('view engine', 'ejs') //by default express and ejs will look for the views folder 

//This is only necessary if your view folder is not called "views", then pass the folder name as the second parameter
//app.set('views', 'viewFolderName')

// listen for request
app.listen(3000) // automatically localhost, return an instance of server, can be stored in to a const server

// app.use((req, res, next) => { // will fire for every single request, This will make the browser hange, since the browser doesn't know what to do next, so need to have a third paramether
//     console.log('New request made:')
//     console.log('host ', req.hostname)
//     console.log('path ', req.path)
//     console.log('method ', req.method)
//     next()
// }) 

// app.use((req, res, next) => { 
//     console.log('In the next middleware')
//     next()
// }) 

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

/**
 * Middleware - Code which runs (on the server) between getting a request and sending a response
 * use() ande get('/', func) are example of middleware
 * Middleware can be many, it runs from the top to bottom
 * Middleware examples
 * Logger middleware to log details of every request
 * Authentication check middleware for protected routes
 * Middleware to parse JSON data from requests
 * Return 404 pages
 */
