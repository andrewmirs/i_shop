const router = require('express').Router();

router.get('/test', (req, resp) => {
    resp.send({
        success: true,
        message: "API Test Working"
    })
})

module.exports = router;

