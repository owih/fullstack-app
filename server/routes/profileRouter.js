const Router = require('express');
const router = new Router();
const profileController = require('../controllers/profileController');

router.get('/', profileController.getAll);
router.get('/search', profileController.getPerName);
router.get('/:id', profileController.getOne);
router.put('/:id', profileController.changeProfileData);

module.exports = router;
