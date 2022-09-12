const express = require('express');
const mongoose = require('mongoose');
const router = require('../Backend/routes/watch-routes')
const test = require('./routes/Test-Router')
const app = express();


//middleware
app.use('watchs',router) //localhost:3001/watchs
app.use('test',test) //localhost:3001/watchs
app.use(express.json())

//avganic077 woHLYXsXWYQ6vfKM
mongoose.connect('mongodb+srv://ruslan:UB8vMJdCEOQe6xDQ@cluster0.765ir.mongodb.net/FinalDB?retryWrites=true&w=majority')
.then(()=>console.log('Mission Completed......'))
.then(()=>{
    app.listen(8001)
})
.catch((err)=>console.log(err))


// app.listen(port, () => {
//     console.log(`running ${port}`);
// })