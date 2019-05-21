const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// router.get('/', (req, res) => {
//     res.send('We are on posts page');
// })

// router.get('/', async (req, res) => {
//     try {
//         const allPosts = await Post.find();
//         res.json(allPosts);
//     } catch(err) {
//         res.json({message : err});
//     }
// })

router.get('/', (req, res) => {
    Post.find()
    .then(allPosts => 
        res.json(allPosts))
    .catch(err =>
        res.json({message : err}));
});


// router.post('/', (req, res) => {
//     const posts = new Post(req.body);
//     posts.save()
//     .then(data => {
//         res.json(data);
//     })
//     .catch(err => {
//         res.json({message: err});
//     });
// })

router.post('/', async (req, res) => {
    const posts = new Post(req.body);
    try{
        const savedPost = await posts.save();
        res.json(savedPost);
    } catch(err){
        res.json({message: err});
    }
})

router.get('/:postId', (req, res) => {
    Post.findOne({_id: req.params.postId})
    .then(allPosts => 
        res.json(allPosts))
    .catch(err =>
        res.json({message : err}));
});

router.delete('/:postId', (req, res) => {
    Post.deleteOne({_id: req.params.postId})
    .then(data => 
        res.json(data))
    .catch(err =>
        res.json({message : err}));
});

router.patch('/:postId', (req, res) => {
    Post.update({_id: req.params.postId},
        {$set: {
            title: req.body.title,
        }})
    .then(data => 
        res.json(data))
    .catch(err =>
        res.json({message : err}));
});


module.exports = router;