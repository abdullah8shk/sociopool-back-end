const user = require("../models/userSchema")
const db = require('../models')

const addUser = async(req,res) => {
    try{
      const {body:{userName}} = req
      const newUser = new user({
          userName
      })
      const response = await newUser.save()
      res.json(response)
    }
    catch(err){
      console.log(err)
    }
}

const getAllUsers = async(req,res)=>{
  try {
    const respnse = await user.find().populate('userTrackRecord')
    res.json(respnse)
  } catch (error) {
    console.err(error)    
  }
}

const assignDistanceTrackRecord = async (req, res) => {
  // console.log("body", req.body)
  db.Distance.findOne({ _id: req.body.id }).then((dbDistance) => {
    return db.User.findOneAndUpdate({ _id: req.params.id }, { $push: { userTrackRecord: dbDistance._id } }, { new: true, useFindAndModify: false })
  }).then((dbUser) => {
    console.log(dbUser)
    return res.json(dbUser)
  }).catch((err) => {
    console.log(err)
  })
}


module.exports = {addUser,getAllUsers,assignDistanceTrackRecord}
