
const {DataTypes, UUIDV4} = require('sequelize');

module.exports = (sequelize)=>{
    // console.log("ss", sequelize)
    const User = sequelize.define('User',{
        id : {
     type : DataTypes.UUID,
     defaultValue : DataTypes.UUIDV4,
     primaryKey : true
    
    },
     firstName : {
     type : DataTypes.STRING,
     allowNull : false,
     get(){
         const rawValue = this.getDataValue('firstName');
         return rawValue ? rawValue.toUpperCase() : null;
     }
    },
    lastName : {
     type : DataTypes.STRING,
     allowNull : false
    },
     email : {
     type : DataTypes.STRING,
     allowNull : false
    },
    password : {
     type : DataTypes.STRING,
     allowNull : false,
     set (value){
         this.setDataValue('password',`hashed(${value})`);
     }
    }
    });
    sequelize.sync({alter : true});
}