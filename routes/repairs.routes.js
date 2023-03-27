const express = require('express');

const repairsController = require('../controllers/repairs.controller');
// const productsMiddleware = require('../middlewares/products.middleware')

const router = express.Router();
router
  .route('/')
  .get(repairsController.findAllRepairs)
  .post(
    // productsMiddleware.validProducts,
    repairsController.createRepair
  );
router
  .route('/:id')
  .get(
    // productsMiddleware.ValidExistProduct, 
    repairsController.findOneRepair)
  .patch(
    // productsMiddleware.validProducts,
    // productsMiddleware.ValidExistProduct,
    repairsController.updateRepair
  )
  .delete(
    // productsMiddleware.ValidExistProduct,
    repairsController.deleteRepair);

module.exports = router;
