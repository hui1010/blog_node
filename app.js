const express = require('express') //return a function

//3rd party middleware
const morgan = require('morgan')

const mongoose = require('mongoose')

const Blog = require('./models/blog')

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

app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'new blog',
        snippet: 'about my new blog',
        body: 'more about my new blog'
    })

    blog.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
})

app.get('/all-blogs', (req, res) => {
    Blog.find()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
})

app.get('/single-blog', (req, res) => {
    Blog.findById('some id')
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
})

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
// app.post()

// 404 pages
app.use((req, res) => {
    res.status(404).render('404', {title: '404'})
})
