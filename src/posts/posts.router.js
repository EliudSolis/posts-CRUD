const postsServices = require('./posts.services')
const router = require('express').Router()

router.get('/posts', postsServices.getAllPosts)
router.post('/posts', postsServices.createPost)
router.get('/posts/:id', postsServices.getPostById)
router.patch('/posts/:id', postsServices.updatePost)
router.delete('/posts/:id', postsServices.deletePost)

module.exports = router

