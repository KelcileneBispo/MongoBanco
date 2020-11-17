const router = require('express-promise-router')();
const pedidoController = require('../controllers/pedido.controller');


router.post('/pedidos/:idUser',pedidoController.criarPedidos);

router.get('/pedidos/:idUser', pedidoController.getPedidos);

router.get('/pedidos', pedidoController.getPedidoProd);

module.exports = router;