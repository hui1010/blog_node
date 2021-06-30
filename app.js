const express = require('express') //return a function

// express app
const app = express() // invode that function to create a instance of an express app, stored in the const app

// listen for request
app.listen(3000) // automatically localhost, return an instance of server, can be stored in to a const server

app.get('/', (req, res) => {//path, function for get(), everything send from the address bar is get method

    // res.send('<p>Hello hello hello Huiyi Huiyi Huiyi</p>'); // automaticaly set the Content-Type header and statusCode 200

    //sendFile() wants a absolute path, so can pass in the second parameter, which is an object pointing out the root of that relative path
    res.sendFile('./views/index.html', {root: __dirname})
})
app.get('/about', (req, res) => {

    // res.send('<p>What do you know about me?</p>'); 
    res.sendFile('./views/about.html', {root: __dirname})
})


// Redirects
app.get('/about-us', (req, res) => {

    res.redirect('./about')//automatically set the statusCode 301
})


// 404 pages
// use() create middleware and fire middleware functions in express
// use() is fired for every single request comming in, but ONLY if the request reaches this point in the code
//Position is important, it has to be on the bottom
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', {root: __dirname})
})

