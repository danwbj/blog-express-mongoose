const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const PostModel = mongoose.model('Post')

module.exports = {
    test: function (req, res, next) {},
    createPost: function (req, res, next) {
        // console.log(PostModel)
        var obj = new PostModel(req.body)
        // console.log(obj)
        // res.json(obj)
        obj.save(function (err) { //存储
            console.log('----------------------')
            console.log(err)
            if (err) {
                console.log('save failed')
            } 
            console.log('save success')
        })
        // PostModel.create(req.body,function(err, instance) {
        //     if(err){
        //         res.json({message:'error'})
        //     }else{
        //         res.json(instance)
        //     }
        // })
    },
    findAllPost: function (req, res, next) {
        PostModel.find({}, (err, list) => {
            console.log(err)
            console.log(list)
        })

    }
}