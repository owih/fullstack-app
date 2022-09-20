const Router = require('express');
const router = new Router();
const likeStateController = require('../controllers/likeStateController');

router.post('/', likeStateController.create);
router.get('/', likeStateController.getAll);

module.exports = router;
