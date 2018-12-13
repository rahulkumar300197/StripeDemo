var express = require('express');
var paymentControler = require('./controler/paymentControler');
var router = express.Router();

/* GET notifications listing. */
router.get('/send_bulk_notification',notificationControler.sendBulkNotification);

module.exports = router;
