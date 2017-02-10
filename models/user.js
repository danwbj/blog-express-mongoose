var mongoose = require('mongoose')
var Schema = require('mongoose').Schema

// Schema 结构
var UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    password: {
        type: String
    },
    avatar: {
        type: String
    },
    gender: {
        type: String
    },
    bio: {
        type: String
    },
    time: {
        type: Date,
        default: Date.now
    },
    posts: [{type: Schema.Types.ObjectId, ref: 'comment'}],
    comments: [{type: Schema.Types.ObjectId, ref: 'comment'}],
})
UserSchema.methods = {
}
UserSchema.statics = {
}
// model
mongoose.model('User', UserSchema)