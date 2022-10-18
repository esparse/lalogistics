var Promise = require('promise');
const all = Promise.all([
    new Promise((resolve,reject)=>setTimeout(()=> resolve(
      
       
           
    ),1000)),
    new Promise((resolve,reject)=>setTimeout(()=> resolve(2),1000)),
    new Promise((resolve,reject)=>setTimeout(()=> resolve(3),1000))
]).catch(err => console.log("Promise Rejected",err));
all.then(result =>console.log(result))

