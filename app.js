const express = require('express') //return a function

// express app
const app = express() // invode that function to create a instance of an express app, stored in the const app


// register view engine
app.set('view engine', 'ejs') //by default express and ejs will look for the views folder 

//This is only necessary if your view folder is not called "views", then pass the folder name as the second parameter
//app.set('views', 'viewFolderName')

// listen for request
app.listen(3000) // automatically localhost, return an instance of server, can be stored in to a const server

app.get('/', (req, res) => {//path, function for get(), everything send from the address bar is get method

    // res.send('<p>Hello hello hello Huiyi Huiyi Huiyi</p>'); // automaticaly set the Content-Type header and statusCode 200

    //sendFile() wants a absolute path, so can pass in the second parameter, which is an object pointing out the root of that relative path
    // res.sendFile('./views/index.html', {root: __dirname})

    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Yoshi finds a lot of eggs on his way back home'},
        {title: 'Mario finds stars', snippet: 'Mario wanted starts and he found quite a lot eventually'},
        {title: 'Bowser finds mushrooms', snippet: 'Bowser wants to eat mushrooms so he can make mushroom soup'}
    ]

    /* EJS */
    res.render('index', {title: 'Home', blogs}) //first parameter: the page, second parameter: data - an object
})
app.get('/about', (req, res) => {

    // res.send('<p>What do you know about me?</p>'); 
    // res.sendFile('./views/about.html', {root: __dirname})

    //EJS
    res.render('about', {title: 'About'})
})


// Redirects
// app.get('/about-us', (req, res) => {

//     res.redirect('./about')//automatically set the statusCode 301
// })


app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create'})
})


// 404 pages
// use() create middleware and fire middleware functions in express
// use() is fired for every single request comming in, but ONLY if the request reaches this point in the code
//Position is important, it has to be on the bottom
app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', {root: __dirname})
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
