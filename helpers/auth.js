const jwt = require('jwt-simple');
const { secret } = require('../config').jwtConfig

exports.userDataToSend = (user) => {
    return {
        name: `${user.firstName} ${user.lastName[0].toUpperCase()}.`,
        email: user.email,
        pid: user.pid,
    }
}

exports.tokenForUser = (user) => {

    return jwt.encode({
        uid: user.id,
        ts: new Date().getTime(),
    }, secret);
}