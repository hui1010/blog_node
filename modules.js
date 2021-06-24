import { people, ages } from './people' 

// const p = require('./people') 
//console.log(p)// An empty object

// console.log(people) //Error! Importing the file here doesn't give us access to the things in the file
// can only access to people inside the people.js file or export the people object

// console.log(p.people, p.ages)

console.log(people, ages)

import { platform, homedir } from 'os'
console.log(platform(), homedir())

