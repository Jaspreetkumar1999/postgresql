const Models = require('../models/sequelize');

class ContactService {
constructor(sequelize){
   Models(sequelize);
   this.client = sequelize;
   this.models = sequelize.models;
}
async createContact(phone ,  UserId){
    try{
      const contact = await this.models.contactInfo.create({
        phone,
         UserId
       
      });

      return contact;

    }catch(err){
      return err;
    }
}

async getContact(){
   try{
    const contact = await this.models.contactInfo.findOne({where : {"firstName": "fifthUser"}});
    return contact ;
   }
  catch(err){
    return err;
  }
}

async deleteContact(){
  try{
     const contact = await this.models.contactInfo.destroy({where : {firstName : "hi"}});
     return "contact Deleted"
  }catch(err){
    return err;
  }
}

async updateContact(){
  try{
     await this.models.contactInfo.update({lastName : "hello12"},{where : {firstName : "hi"}});
     return "User updated."
  }
  catch(err){
    return err
  }
}

async getAllContact(){
  try{
       const userList = await this.models.contactInfo.findAll({
         attributes : ["firstName", "lastName"]
       });
       return userList;
  }
  catch(err){
     return err;
  }
}

}

module.exports = ContactService;