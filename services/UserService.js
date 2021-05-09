const Models = require('../models/sequelize');

class UserService {
constructor(sequelize){
   Models(sequelize);
   this.client = sequelize;
   this.models = sequelize.models;
}
async createUser({firstName , lastName, email, password}){
    try{
      const user = await this.models.User.create({
        firstName,
        lastName,
        email,
        password
      });
      return user;

    }catch(err){
      return err;
    }
}

async getUser(){
   try{
    const user = await this.models.User.findOne({where : {"firstName": "hill"}});
    return user ;
   }
  catch(err){
    return err;
  }
}

async deleteUser(){
  try{
     const user = await this.models.User.destroy({where : {firstName : "hi"}});
     return "user Deleted"
  }catch(err){
    return err;
  }
}

async updateUser(){
  try{
     await this.models.User.update({lastName : "hello12"},{where : {firstName : "hi"}});
     return "User updated."
  }
  catch(err){
    return err
  }
}

async getAllUsers(){
  try{
       const userList = await this.models.User.findAll({
         attributes : ["firstName", "lastName"]
       });
       return userList;
  }
  catch(err){
     return err;
  }
}
async followUser(){
  try{
    const currentUser = await this.getUser();
    

  }catch(err){

  }
}

}

module.exports = UserService;