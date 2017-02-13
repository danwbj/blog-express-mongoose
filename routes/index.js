var express = require('express')
var router = express.Router()
var IndexController = require('../controllers/indexController')
router.get('/', function(req, res) {
    res.send('hello, express')
})
router.post('/posts', IndexController.createPost)
router.get('/posts', IndexController.findAllPost)
router.get('/posts/:id', IndexController.findPostById)
router.post('/comments', IndexController.createComment)
router.post('/register', IndexController.createUser)











router.get('/test', IndexController.test)

module.exports = router