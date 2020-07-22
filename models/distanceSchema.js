const {Schema,model} = require('mongoose')

const distanceSchema = new Schema({
    distanceTravelled:{
        type: Number
    },
    startTime:{
        type: String
    },
    endTime:{
        type: String
    }
})

module.exports = model('distance',distanceSchema)