const express = require('express')
const Blog = require('../models/blog')

// create a new express router
const router = express.Router()


router.get('/', (req, res) => {//path, function for get(), everything send from the address bar is get method
    Blog.find().sort({createdAt: -1}) // sort from newest to oldest
        .then((result) => {
            res.render('index', {title: 'All Blogs', blogs: result})
        })
        .catch((err) => {
            console.log(err)
        })

    /* EJS */
    res.render('index', {title: 'Home', blogs}) //first parameter: the page, second parameter: data - an object
})


router.get('/create', (req, res) => {
    res.render('create', {title: 'Create'})
})
router.post('/blogs', (req, res) => {
    // console.lof(req.body)
    const blog = new Blog(req.body)
    blog.save()
        .then((result) => {
            res.redirect('/blogs')
        })
        .catch((err) => {
            console.log(err)
        })
})

router.get('/:id', (req, res) => {//params.samename with what's after :
    const id = req.params.id
    Blog.findById(id)
        .then((result) => {
            res.render('details', { blog: result, title: 'Blog Details' })
        })
        .catch((err) => {
            console.log(err)
        })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.json({redirect: '/blogs'})
        })
        .catch((err) => {
            console.log(err)
        })
})

module.exports = router
