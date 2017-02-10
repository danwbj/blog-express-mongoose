let indexRouter = require('../routes/index')
// let usersRouter = require('../routes/users')
// let postRouter = require('../routes/post')
module.exports = function (app) {
    //有多个模块加载多个模块
    app.use('/', indexRouter)
    // app.use('/user', usersRouter)
    // app.use('/post', postRouter)

}