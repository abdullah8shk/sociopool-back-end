const {Schema,model} = require('mongoose')

const userSchema = new Schema({
    userName:{
        type: String
    },
    userTrackRecord:[{
        type: Schema.Types.ObjectId,
        ref: 'distance'
    }]
})

module.exports = model('user',userSchema)


