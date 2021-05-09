const express = require('express');
const ContactService = require('../../services/ContactService');
const router = express.Router();
// const contactService = require('../../services/contactService');
module.exports = (config) => {
  // console.log("config", config)
 const contactService = new ContactService(config.postgres.client)
  router.get('/', async (req, res, next) => {
    try{
      const contact = await contactService.getAllContacts();
      res.send(contact);
    }catch(err){
      return next(err);
    }
  });
  router.get('/findOne', async (req, res, next)=>{
    try{
     const contact = await contactService.getContact();
     res.send(contact);
    }catch(err){
      return next(err)
    }
  })
  router.put('/update', async (req, res, next ) =>{
    try {
      const contact = await contactService.updateContact();
       res.send(contact);
    }
    catch(err){
      return next(err);
    }
  })
  router.delete('/delete', async (req, res, next ) =>{
    try {
      const contact = await contactService.deleteContact();
       res.send(contact);
    }
    catch(err){
      return next(err);
    }
  })
  router.post('/create', async (req, res,next) =>{
    try{
      
         const contact = await contactService.createContact(req.body);
        
         res.send(contact);
    }catch(err){
      return next(err)
    }
  })

  return router;
};