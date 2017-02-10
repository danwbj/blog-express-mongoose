module.exports = function () {
    var mongoose = require('mongoose')
    //重点在这一句，赋值一个全局的承诺。
    mongoose.Promise = global.Promise
    var db = mongoose.createConnection(config.db)
    // 链接错误
    db.on('error', function (error) {
        console.log('database init error!')
        console.log(error)
    })
    db.once('open', function (callback) {
        console.log('database init success!')
        // yay!
    })
}
