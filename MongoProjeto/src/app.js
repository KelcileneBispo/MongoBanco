const express = require('express');
const cors = require('cors');



const app = express();

 //Rotas da API:
const index = require('./routes/index');
const productRoute = require('./routes/product.routes');
const userRoute = require('./routes/user.routes');
const pedidoRoute = require('./routes/pedido.routes');



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index);
app.use('/api/', productRoute);
app.use('/api/', userRoute);
app.use('/api', pedidoRoute);

module.exports = app;