const postControllers = require('./posts.controllers')

const getAllPosts = (req, res) => {

    postControllers.findAllPosts()
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(400).json(err)
    })
}

const getPostById = (req, res) =>{
    const id = Number(req.params.id)

    postControllers.findPostById(id)
    .then(data =>{
        if(data){
            res.status(200).json(data)
        } else {
            res.status(404).json({message: "ID not found"})
        }
    })
    .catch(err => {
        res.status(400).json(err)
    })
}

const createPost = (req, res) =>{
    const data = req.body

    postControllers.createPost(data)
    .then(data => {
         res.status(201).json(data) 
            
    })    
    .catch(err => {
        res.status(400).json({message: "Data must include 'content', 'userName' and isPublished"})
    })
}

//{message: `Post with id: ${id} updated succesfully`} {message: 'Product not found'}

const updatePost = (req, res) =>{
    const id = Number(req.params.id)
    const data = req.body

    postControllers.updatePost(id, data)
    .then(data => {
        if(data == 1){
            res.status(200).json(data)
            console.log(data)
        } else {
            res.status(404).json(data)
        }
    })
    .catch(err => {
        res.status(400).json(err)
    })
}

const deletePost = (req, res) =>{
    const id = Number(req.params.id)
    

    postControllers.deletePost(id)
    .then(data =>{
        if(data){
            res.status(202).json(data)
        } else {
            res.status(404).json({message: 'Post not found'})
        }
    })
    .catch(err => {
        res.status(400).json(err)
    })
}

// {message: `Post with id ${id} deleted succesfully`}

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
}