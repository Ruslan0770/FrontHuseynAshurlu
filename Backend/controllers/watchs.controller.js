const Watch = require('../model/Watch')

const getAllWatchs = async (req,res,next)=>{
    let watchs;
    try {
        watchs = await Watch.find();
    } catch (error) {
        console.log(error);
    }
    if(!watchs){
        return res.status(404).json({message:"No Watch found..."})
    }
    return res.status(200).json({watchs})
}



const getAllwatchsbyId = async (req,res,next)=>{
    const id = req.params.id;
    let watchs;
    try {
        watchs = await Watch.findById(id);
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
        watch = new Watch({
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


const getUpdate = async (req,res,next)=>{
    const id = req.params.id;
    const {name,price,available} = req.body

    let watchs;
    try {
        watchs = await Watch.findByIdAndUpdate(id,{
            name,
            price,
            available

        });
        watchs=await watchs.save();
    } catch (error) {
        console.log(error);
    }
    if(!watchs){
        return res.status(404).json({message:"No Watch found..."})
    }
    return res.status(200).json({watchs})
}


const DeleteWatchs = async (req,res,next)=>{
    const id = req.params.id;
    let watchs;
    try {
        watchs = await Watch.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
    }
    if(!watchs){
        return res.status(404).json({message:"No Watch found..."})
    }
    return res.status(200).json({watchs})
}

exports.getAllWatchs=getAllWatchs
exports.addWatchs=addWatchs
exports.getAllwatchsbyId =getAllwatchsbyId
exports.getUpdate=getUpdate
exports.DeleteWatchs=DeleteWatchs