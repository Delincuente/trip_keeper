const express = require('express');
const router = express.Router();

const HomeController = require('../controllers/HomeController');


// router.get('/', HomeController.dashboard);
router.get('/', HomeController.comingSoon);
router.get('/403', HomeController.error403);
router.get('/404', HomeController.error404);

router.use(HomeController.error404);


module.exports = router;