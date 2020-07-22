const distance = require("../models/distanceSchema")
const db = require('../models')

const addDistanceTrackRecord = async(req,res) => {
    try{
      const {body:{distanceTravelled,startTime,endTime}} = req
      const newrecord = new distance({
          distanceTravelled,startTime,endTime
      })
      const response = await newrecord.save()
      res.json(response)
    }
    catch(err){
      console.log(err)
    }
}

const getAllDistanceTrackRecord = async(req,res)=>{
  try {
    const response = await distance.find()
    res.json(response)
  } catch (error) {
    console.err(error)    
  }
}

module.exports = {addDistanceTrackRecord,getAllDistanceTrackRecord}
