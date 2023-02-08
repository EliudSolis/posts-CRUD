const Posts = require('../models/posts.models')


const findAllPosts = async() => {
    //? Your code here:
    const data = await Posts.findAll()

    return data
}

const findPostById = async (id) => {
    //? Your code here:
    const data = await Posts.findOne({where: {id: id}})
    return data
}

const createPost = async(data) => {
    //? Your code here:
    const newPost = {
        content: data.content,
        userName: data.userName,
        isPublished: data.isPublished
    }

    const postCreated = await Posts.create(newPost)
    return postCreated
}

const updatePost = async(id, data) => {
    //? Your code here:
    const postToUpdate = await Posts.update(data, {
        where: {id: id}
    })

    return postToUpdate
}

const deletePost = async(id) => {
    //? Your code here:
    const data = await Posts.destroy({where: {id: id}})
    return data
}

module.exports = {
    findAllPosts,
    findPostById,
    createPost,
    updatePost,
    deletePost
}

 