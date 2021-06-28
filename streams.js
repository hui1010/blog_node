// Streams and Buffers
/**
 * Streams - Start using data before it has finished loading, small packages of data will be saved in Buffers 
 * 
 */

const fs = require('fs')

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf-8'})
const writeStream = fs.createWriteStream('./docs/blog4.txt')

// Event listener, listening to a data event
// readStream.on('data', (chunk)=> {
//     console.log('---------NEW CHUNK-----------')
//     writeStream.write('\n NEW CHUNK \n')
//     writeStream.write(chunk)
// })

// pipe - a shorter replacement for code above, just it must be from a readible stream to a writable one

readStream.pipe(writeStream)