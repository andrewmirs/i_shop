const db = require('../index');

const userStatuses = require('./user_statuses')(db);

const userTypes = require('./user_types')(db);

const users = require('./users')( db, userStatuses, userTypes );

const products = require('./products')( db, users )

module.exports = {
    products,
    users,
    userStatuses,
    userTypes,
}


