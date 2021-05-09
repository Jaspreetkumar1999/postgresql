
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

    const contactInfo = sequelize.define('contactInfo',{
         id : {
     type : DataTypes.UUID,
     defaultValue : DataTypes.UUIDV4,
     primaryKey : true
    
    },
    phone : {
        type : DataTypes.STRING,
        allowNull : false
    }
    },{
        freezeTableName : true,
        timestamps : true
    });

    const Tweet = sequelize.define('Tweet', {
    id : {
     type : DataTypes.UUID,
     defaultValue : DataTypes.UUIDV4,
     primaryKey : true
     },
    title:{
         type : DataTypes.STRING,
         allowNull : false
    },
    description : {
        type : DataTypes.STRING,
         allowNull : false
    }
    });

    const Actor = sequelize.define('Actor', {
    id : {
     type : DataTypes.UUID,
     defaultValue : DataTypes.UUIDV4,
     primaryKey : true
     },
    name:{
         type : DataTypes.STRING,
         allowNull : false
    }
 
    });
   const Movie = sequelize.define('Movie', {
    id : {
     type : DataTypes.UUID,
     defaultValue : DataTypes.UUIDV4,
     primaryKey : true
     },
      name:{
         type : DataTypes.STRING,
         allowNull : false
    }
   });

// One-to-one

User.hasOne(contactInfo, {
    foriegnKey : {
        type : DataTypes.UUID,
        allowNull : false
    }
});
contactInfo.belongsTo(User);

User.hasMany(Tweet, {
    foriegnKey : {
        type : DataTypes.UUID,
        allowNull : false
    }
});
Tweet.belongsTo(User);
User.belongsToMany(User,  {
    foriegnKey : "UserId",
    as : 'User',
    through : 'Follow'
});
User.belongsToMany(User,{
       as : 'Followed',
    foriegnKey : "FollowedId",
    through : 'Follow'
});

    sequelize.sync({alter : true});
}
