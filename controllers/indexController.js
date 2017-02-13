const mongoose = require('mongoose')
const PostModel = mongoose.model('Post')
const CommentModel = mongoose.model('Comment')
const UserModel = mongoose.model('User')

module.exports = {
    test: function (req, res, next) {},
    createPost: function (req, res, next) {
        PostModel
            .create(req.body, function (err, instance) {
                if (err) 
                    return res.json({message: 'error'})
                res.json(instance)
            })
    },
    findAllPost: function (req, res, next) {
        PostModel
            .find()
            .populate('comments')
            .exec(function (err, list) {
                if (err) 
                    return res.json({message: 'error'})
                res.json(list)
            })
    },
    findPostById: function (req, res, next) {
        PostModel
            .findById(req.params.id)
            .populate('comments')
            .exec(function (err, instance) {
                if (err) 
                    return res.json({message: 'error'})
                res.json(instance)

            })
    },
    createComment: function (req, res, next) {
        CommentModel
            .create(req.body, function (err, instance) {
                if (err) 
                    return res.json({message: 'error'})
                PostModel
                    .findById(req.body.post, function (err, postinstance) {
                        if (err) 
                            return res.json({message: 'error'})
                        postinstance
                            .comments
                            .push(instance)
                        postinstance.save(function (err, c) {
                            if (err) 
                                return res.json({message: 'error'})
                            res.json(c)
                        })
                    })
            })

    },

    createUser: function (req, res, next) {
        UserModel
            .create(req.body, function (err, instance) {
                if (err) {
                    res.json({message: 'error'})
                } else {
                    res.json(instance)
                }
            })

    }
}