const express = require('express');

const usersController = require('../controllers/users.controller');
const usersMiddleware = require('../middlewares/users.middleware');

const router = express.Router();
router
  .route('/')
  .get(usersController.findAllUsers)
  .post(
    usersMiddleware.validUser,
    usersController.createUser
  );
router
  .route('/:id')
  .get(
    // productsMiddleware.ValidExistProduct, 
    usersController.findOneUser)
  .patch(
    usersMiddleware.validUser,
    // productsMiddleware.ValidExistProduct,
    usersController.updateUser
  )
  .delete(
    // productsMiddleware.ValidExistProduct, 
    usersController.deleteUser);

module.exports = router;
