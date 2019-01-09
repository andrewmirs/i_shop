const router = require('express').Router();
const { requireSignIn } = require('../setup');
const { signUp } = require('../../controllers/auth');

router.post('/sign-up', signUp);

router.post('/sign-in', requireSignIn, ( req, res ) => {
    res.send({
        success: true,
        message: 'This is for sign-in',
        user: req.user
    });
})

module.exports = router;