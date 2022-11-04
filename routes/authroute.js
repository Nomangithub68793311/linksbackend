const express = require('express');
const router = express.Router();
const User = require('../models/User')
const auth = require('./routehandler')



router.post('/signup', auth.signin_post);
router.post('/login', auth.login_post);

router.get('/info/:username', auth.info_get);

module.exports = router;
