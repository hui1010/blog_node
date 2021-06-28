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
// if(!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err)=>{
//     if(err) {
//         console.log(err)
//     }
//     console.log('folder created.')
//     })
// } else {
//     fs.rmdir('./assets', (err)=>{
//         if(err) {
//             console.log(err)
//         }
//         console.log('folder deleted.')
//     })
// }

// deleting files
if(fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err)=>{
        if(err) {
            console.log(err)
        }
        console.log('file deleted')
    })
} else {
    fs.writeFile('./docs/deleteme.txt', 'This file is meant to be deleted for demo', (err)=>{
        if(err) {
            console.log(err)
        }
        console.log('file was created.')
    })
}


