const express = require('express');
const router = express.Router();
const { 
  submitContact, 
  getAllContacts, 
  subscribe, 
  getAllSubscribers 
} = require('../controllers/formController');

router.post('/contact', submitContact); 
router.get('/contact', getAllContacts); 
router.post('/subscribe', subscribe);   
router.get('/subscribe', getAllSubscribers); 

module.exports = router;