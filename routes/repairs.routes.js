const express = require('express');

const repairsController = require('../controllers/repairs.controller');
// const repairsMiddleware = require('../middlewares/repairs.middleware')

const router = express.Router();
router
  .route('/')
  .get(repairsController.findAllRepairs)
  .post(
    // repairsMiddleware.validRepairs,
    repairsController.createRepair
  );
router
  .route('/:id')
  .get(
    // repairsMiddleware.ValidExistProduct, 
    repairsController.findOneRepair)
  .patch(
    // repairsMiddleware.validRepairs,
    // repairsMiddleware.ValidExistProduct,
    repairsController.updateRepair
  )
  .delete(
    // repairsMiddleware.ValidExistProduct,
    repairsController.deleteRepair);

module.exports = router;
