const express = require('express');
const router = express.Router();

const todosRoute = require('./todos');
const usersRoute = require('./users/index');
const contactRoute = require('./users/contact');
const tweetRoute = require('./users/tweet');
module.exports = (params) => {

  router.get('/', (req, res) => {
    res.send('Home Page');
  });

  // router.use('/todo', todosRoute(params.todoService));
  router.use('/user', usersRoute(params));
  router.use('/contact', contactRoute(params));
   router.use('/tweet', tweetRoute(params)); 
  return router;
};