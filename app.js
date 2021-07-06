const express = require('express') //return a function

//3rd party middleware
const morgan = require('morgan')

const mongoose = require('mongoose')

const blogRoutes = require('./routes.blogRoutes')

const { render } = require('ejs')

// express app
const app = express() // invode that function to create a instance of an express app, stored in the const app

// connect to mongoDB 
const dbURI = "mongodb+srv://mern:1234@cluster0.c4dis.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(3000))
    .catch( (err) => {console.log(err)})

// register view engine
app.set('view engine', 'ejs') //by default express and ejs will look for the views folder 


app.use(morgan('dev'))//other options: 'tiny'


//middleware & static files - images and css files which are public
app.use(express.static('public'))//pass in a folder name

//midleware for recieving the form data
app.use(express.urlencoded({ extended: true })) // extended: true is not necessary, can leave the () empty

app.get('/', (req, res) => {//path, function for get(), everything send from the address bar is get method
    res.redirect('/blogs')
})

app.get('/about', (req, res) => {
    //EJS
    res.render('about', {title: 'About'})
})

// blog routes
app.use('/blogs', blogRoutes)

// 404 pages
app.use((req, res) => {
    res.status(404).render('404', {title: '404'})
})

/**
 * Route parameters
 * The variable parts of the route that may change value
 * eg: localhost:3000/blogs/:id
 * :id is the parameter, can be accessed by req.params.something 
 */