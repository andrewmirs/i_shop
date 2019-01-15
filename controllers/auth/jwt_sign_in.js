const { userDataToSend } = require('../../helpers/auth');

module.exports = (req, res) => {
    try {
        res.send({
            success: true,
            user: userDataToSend(req.user),
        });
    } catch(err){
        res.status(500).send('Error with JWT sign in');
    }
}