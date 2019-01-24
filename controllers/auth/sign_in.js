const { tokenForUser, userDataToSend } = require('../../helpers/auth');

module.exports = ( req, res ) => {
    try {
        res.send({
            success: true,
            token: tokenForUser(req.user),
            user: userDataToSend(req.user),
        });
    } catch(err){
        res.status(500).send('Error signing in');
    }
}