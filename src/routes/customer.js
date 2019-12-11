const router = require('express').Router();

const customerController = require('../controllers/customerController');

router.get('/', customerController.list);
router.get('/listProductos', customerController.listProductos);

router.post('/add', customerController.save);
router.post('/addProductos', customerController.saveProductos);

router.get('/update/:IdLocal', customerController.edit);
router.post('/update/:IdLocal', customerController.update);

router.get('/updateProductos/:IdProducto', customerController.editproductos);
router.post('/updateProductos/:IdProducto', customerController.updateproductos);

router.get('/delete/:IdLocal', customerController.delete);
router.get('/deleteProductos/:IdProducto', customerController.deleteProductos);

module.exports = router;

