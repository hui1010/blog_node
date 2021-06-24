//A bit like the window object inside browser

/*
    In node, the global object is global, and it represents a global context in a node environment
    However, something in the window object cannot be accessed in global in node, t.ex document object

*/

// console.log(global)

//run once after 3s
global.setTimeout(()=>{
    console.log('This will be shown a bit later')
    clearInterval(interval)
}, 3000) // global. can be skipped

//run every second
const interval = setInterval(()=>{
    console.log(new Date().getFullYear())
}, 1000)

console.log(__dirname)//absolute path of the current folder this file is in  D:\practice\blog_node
console.log(__filename)//absolute path of the current folder with this file name added on  D:\practice\blog_node\global.js