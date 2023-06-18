const Addr = require("../models/address")

const postDetails = async(req,res)=>{
    try {
        const data = req.body
        const task = await Addr.create(data)
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json(error)
    }
}

const getRequest = async(req,res)=>{
    
}

module.exports = {
    postDetails
}