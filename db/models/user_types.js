const Sequelize = require('sequelize');
const { findByMid } = require('./interfaces');

module.exports = db => {
    const userTypes = db.define('userTypes', {
        description: {
            allowNull: true,
            type: Sequelize.STRING
        },
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        mid: {
            allowNull: false,
            type: Sequelize.STRING
        },
        name: {
            allowNull: false,
            type: Sequelize.STRING
        }
    }, {
        paranoid: true
    });

    userTypes.findByMid = findByMid;

    return userTypes;
}