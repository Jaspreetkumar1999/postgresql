const express = require('express');
const ContactService = require('../../services/ContactService');
const router = express.Router();
const UserService = require('../../services/UserService');
module.exports = (config) => {
  // console.log("config", config)
 const userService = new UserService(config.postgres.client);
  const contactService = new  ContactService(config.postgres.client)
  router.get('/', async (req, res, next) => {
    try{
      const user = await userService.getAllUsers();
      res.send(user);
    }catch(err){
      return next(err);
    }
  });
  router.get('/findOne', async (req, res, next)=>{
    try{
     const user = await userService.getUser();
     res.send(user);
    }catch(err){
      return next(err)
    }
  })
  router.put('/update', async (req, res, next ) =>{
    try {
      const user = await userService.updateUser();
       res.send(user);
    }
    catch(err){
      return next(err);
    }
  })
  router.delete('/delete', async (req, res, next ) =>{
    try {
      const user = await userService.deleteUser();
       res.send(user);
    }
    catch(err){
      return next(err);
    }
  })
  router.post('/create', async (req, res,next) =>{
    try{
      
         const user = await userService.createUser(req.body);
         let userId = user.id;
         const contactInfo = await contactService.createContact(req.body.phone, userId);
         res.send( {user, contactInfo});
    }catch(err){
      console.log("error", err);
      return next(err)
    }
  })

  return router;
};