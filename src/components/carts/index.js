/* ************************************************************************** */
/* /src/components/carts - Contiene el controlador de los carritos de compra 
(cartsController.js) */
/* ************************************************************************** */

const { Router } = require('express');
const carritoController = require('./cartsController/cartsController');
module.exports = (app) => {
  let router = new Router();
  app.use('/api/carts', router);
  router.post('/', carritoController.addCart);
  router.get('/:cid', carritoController.getCartById);
  router.post('/:cid/product/:pid', carritoController.addProductToCart);
  router.delete('/:cid/product/:pid', carritoController.deleteProductToCart);
  router.delete('/:cid', carritoController.deleteCart);
};
