const router = require('express').Router();
const { getDashboardData } = require('../controllers/apps.controllers');
const { isAuthenticatedUser, isBlocked, isAdmin } = require('../middleware/app.authentication');

router.route('/dashboard').get(isAuthenticatedUser, isBlocked, isAdmin, getDashboardData);

module.exports = router;
