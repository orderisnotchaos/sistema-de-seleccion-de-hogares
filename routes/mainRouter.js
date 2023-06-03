
const express = require('express');

const router = express.Router(); 

const mainController = require('../controllers/mainController');
const notifications = require('../middlewares/notifications');

router.get('/',notifications, mainController.index);
router.get('/clients', mainController.clients);
router.post('/clients/create',notifications, mainController.addClient);
router.post('/clients/edit/:id',mainController.editClient);
router.post('/clients/:id/deleteDemand',mainController.deleteDemand);
router.post('/clients/:id/delete',mainController.deleteClient);
router.get('/properties', mainController.properties);
router.post('/properties/:id/deleteCharacteristic',mainController.deleteCharacteristic);
router.post('/properties/:id/delete',mainController.deleteProperty);
router.post('/properties/add',notifications, mainController.addProperty);
router.get('/matches',mainController.matches);
module.exports = router;