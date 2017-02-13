var mongoose = require('mongoose')
var Schema = require('mongoose').Schema

// Schema 结构
var CommentSchema = new mongoose.Schema({
    content: {
        type: String
    },
    time: {
        type: Date,
        default: Date.now
    },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    post: { type: Schema.Types.ObjectId, ref: 'Post' },
})
CommentSchema.methods = {
}
CommentSchema.statics = {
}
// model
mongoose.model('Comment', CommentSchema)