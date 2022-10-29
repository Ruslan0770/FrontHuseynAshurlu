const express = require('express');
const mongoose = require('mongoose');
const router = require('../Backend/routes/watch-routes')
const tests = require('./routes/Test-Router')
// const watch =require('./model/Watch')
const app = express();


//middleware
app.use('/watchs',router) //localhost:3001/watchs
app.use('/test',tests) //localhost:3001/watchs
app.use(express.json())

// app.get('/watches',async(req,res)=>{
//     var watches=await watch.find({})
//     res.send(watches)
// })

//avganic077 woHLYXsXWYQ6vfKM
mongoose.connect('mongodb+srv://ruslan:UB8vMJdCEOQe6xDQ@cluster0.765ir.mongodb.net/FinalDB?retryWrites=true&w=majority',(error)=>{
    if(!error){
        console.log('connected to Db')
    }else{
        console.log('not connected')
    }
})



// app.listen(port, () => {
//     console.log(`running ${port}`);
// })
app.listen(8080)