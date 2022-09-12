const Test = require('../model/Test')

const getAllWatchs = async (req,res,next)=>{
    let watchs;
    try {
        watchs = await Test.find();
    } catch (error) {
        console.log(error);
    }
    if(!watchs){
        return res.status(404).json({message:"No Watch found..."})
    }
    return res.status(200).json({watchs})
}



const getAllwatchsbyId = async (req,res,next)=>{
    let watchs;
    try {
        watchs = await Test.findById();
    } catch (error) {
        console.log(error);
    }
    if(!watchs){
        return res.status(404).json({message:"No Watch found..."})
    }
    return res.status(200).json({watchs})
}
const addWatchs = async (req,res,next) => {
    const {name,price,available} = req.body
    let watch;
    try {
        watch = new Test({
            name,
            price,
            available
        })
            await watch.save();

    } catch (error) {
        console.log(err);
    }
    if(!watch) {
        return res.status(500).json({message: "No watch found.."})
    }
    else{
        return res.status(201).json({watch})
    }
}

exports.getAllWatchs=getAllWatchs
exports.addWatchs=addWatchs
exports.getAllwatchsbyId =getAllwatchsbyId