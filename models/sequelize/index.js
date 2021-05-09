
const {DataTypes} = require('sequelize');

module.exports = (sequelize)=>{
    // console.log("ss", sequelize)
    const User = sequelize.define('User',{
     firstName : {
     type : DataTypes.STRING,
     allowNull : false
    },
    lastName : {
     type : DataTypes.STRING,
     allowNull : false
    }
    });
    sequelize.sync();
}