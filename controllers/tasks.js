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
    try{
        const tasks = await Addr.find({})
        res.status(200).json({tasks})
    }
    catch(e){
        res.status(500).json({e})
    }
}
const getTask = async (req, res) => {
  try{
    const {id:taskID} = req.params
      const task = await Addr.findOne({_id:taskID})
      if(!task){
        return res.status(404).json({msg:`No Such Task Exist With ID ${taskID}`})
      }
        res.status(200).json({task})
  }
  catch(e){
    res.status(500).json({e})
  }
  
}

module.exports = {
    postDetails,
    getRequest,
    getTask
}
