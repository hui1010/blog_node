const http = require('http')
const fs = require('fs')

const _ = require('lodash')

const server = http.createServer((req, res)=>{
    // console.log(req.url, req.method)

    // lodash
    const num = _.random(0, 10)
    console.log(num)

    const greet = _.once(() => {//Run this function ONLY once
        console.log('Hello')
    })

    //Will become only one hello
    greet()
    greet()


    // Set header content type
    res.setHeader('Content-Type', 'text/html')

    let path = './views'
    switch(req.url) {
        case '/': path += '/index.html'
            res.statusCode = 200
                break
        case '/about': path += '/about.html'
            res.statusCode = 200
                break
        case '/about-us': //redirection
                res.statusCode = 301
                res.setHeader('Location', './about')
                res.end()
                break 
        default: path += '/404.html'
            res.statusCode = 404
                break
    }

    // Send an html file
    fs.readFile(path, (err, data) => { // data is from the file
        if(err) {
            console.log(err)
            res.end()
        } else {
            // res.write(data)
            // res.end()

            //There is a quicker way when we only have one line of writing
            res.end(data)
        }
    })
})

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000...')
})

/**
 * Localhost - like a domain name on the web eg: google
 * 
 * Port numbers - like "doors" into a computer, a specific channel, gateway or port on the computer, that a certain server should communicate through
 */


/**
 * Response status codes describe the type of response sent to the browser and how successful the request was
 * 200 -OK
 * 301 - Resource moved
 * 404 - Not found
 * 500 - Internal server error
 * 
 * 100 Range - informational responses for the browser
 * 200 Range - success codes
 * 300 Range - codes for redircts
 * 400 Range - user or client error codes
 * 500 Range - server error codes
 */

