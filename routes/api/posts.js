const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/posts');
const multer  = require('multer')
const upload = multer(); // <- handles multipart/formdata requests(photos)
// /*---------- Public Routes ----------*/
router.post('/', upload.single('photo'), postsCtrl.create);
router.get('/', postsCtrl.index);
router.get('/details/:id', postsCtrl.postDetails);
router.delete('/:id', postsCtrl.deletePost);


/*---------- Protected Routes ----------*/

module.exports = router;