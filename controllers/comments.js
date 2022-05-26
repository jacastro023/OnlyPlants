const removeUploadedFiles = require('multer/lib/remove-uploaded-files');
const Post = require('../models/post');

module.exports = {
    create,
    deleteComment
}


async function create(req, res){
 
    try {
		// Find a post, so we need the id of the post
        const post = await Post.findById(req.params.id);
        post.comments.push({
            username: req.user.username,
            comment:req.body.comment,
            userId: req.user._id
        }); //mutating a document
        await post.save()// save it
        res.status(201).json({data: 'comment added'})
    } catch(err){
       
        res.status(400).json({err})
    }
    
}


async function deleteComment(req, res){
    try {
        
        const post = await Post.findOne({'comments._id': req.params.id, 'comments.username': req.user.username, 'comments.content': req.user.content});
        post.comments.remove(req.params.id) // mutating a document
        // req.params.id is the like id 
        await post.save() // after you mutate a document you must save
        res.json({data: 'comment removed'})
    } catch(err){
        res.status(400).json({err})
    }
}