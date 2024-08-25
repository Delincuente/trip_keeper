const express = require('express');
const router = express.Router();

const HELPER = require("../helpers/helper");

router.dashboard = function (req, res) {
    res.render('dashboard/index');
};

router.comingSoon = function (req, res) {
    res.render('errors/coming-soon',{ layout: 'before-login' });
};

router.error403 = function (req, res) {
    res.send('errors/403');
    // res.render('errors/403');
};

router.error404 = function (req, res) {
    res.render('errors/404');
};

module.exports = router;