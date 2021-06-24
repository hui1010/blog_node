const fs = require('fs')

// reading files
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if(err) {
//         console.log(err)
//     }
//     console.log(data.toString())
// }) // once reading file is done, the callbac kunction will be fired 

// console.log('last line')

// writing files
fs.writeFile('./docs/blog1.txt', 'Good morening Huiyi, how do you do', ()=>{
    console.log('file was written')
})

// Will create this file if it doesn't exist
fs.writeFile('./docs/blog2.txt', 'Good morening Huiyi, how do you do', ()=>{
    console.log('file was written')
})

// directories


// deleting files
