const express = require('express');
const router = express.Router();
const commentsCtrl = require('../../controllers/comments')

router.post('/:id/comments', commentsCtrl.create)
router.delete('/comments/:id', commentsCtrl.deleteComment)

module.exports = router;