const express = require('express');
const router = express.Router();
const newsletterSubscriberController = require('../controllers/newsletterSubscriberController');

router.post('/subscribers', newsletterSubscriberController.createSubscriber);
router.get('/subscribers', newsletterSubscriberController.getSubscribers);

module.exports = router;
