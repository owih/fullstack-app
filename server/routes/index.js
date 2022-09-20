const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const likeStateRouter = require('./likeStateRouter');
const postRouter = require('./postRouter');

router.use('/user', userRouter);
router.use('/post', postRouter);
router.use('/likeState', likeStateRouter);

module.exports = router;
