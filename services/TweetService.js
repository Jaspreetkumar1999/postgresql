const Models = require('../models/sequelize');

class TweetService {
constructor(sequelize){
   Models(sequelize);
   this.client = sequelize;
   this.models = sequelize.models;
}
async createTweet({description,title, UserId}) {
    try{
      const tweet = await this.models.Tweet.create({
        title,
        description,
        UserId
       
      });

      return tweet;

    }catch(err){
      return err;
    }
}

async getTweet(){
   try{
    const tweet = await this.models.Tweet.findOne({where : {"firstName": "fifthUser"}});
    return tweet ;
   }
  catch(err){
    return err;
  }
}

async deleteTweet(){
  try{
     const tweet = await this.models.Tweet.destroy({where : {firstName : "hi"}});
     return "tweet Deleted"
  }catch(err){
    return err;
  }
}

async updateTweet(){
  try{
     await this.models.Tweet.update({lastName : "hello12"},{where : {firstName : "hi"}});
     return "User updated."
  }
  catch(err){
    return err
  }
}

async getAllTweet(){
  try{
       const userList = await this.models.Tweet.findAll({
         attributes : ["firstName", "lastName"]
       });
       return userList;
  }
  catch(err){
     return err;
  }
}

}

module.exports = TweetService;