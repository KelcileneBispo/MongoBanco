require('dotenv').config();
const { MongoClient } = require('mongodb');



const client = new MongoClient(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`,
    { useUnifiedTopology: true });


exports.criarPedidos = async (req, res) => {
    const idUser = parseInt(req.params.idUser);
    const { descricaoProduct, preco } = req.query;
    const ObjPedidos = {
        idUser,
        descricaoProduct,
        preco,
        dataHora: new Date()


    };

    await client.connect();
    const pedidos = client.db(`${process.env.MONGO_DATABASE}`).collection('pedidosUser');
    await pedidos.insertOne(ObjPedidos).then(console.log('Inserido'));
    res.status(200).send({ message: "pedido criado com sucesso" });
    console.log(ObjPedidos);

}


exports.getPedidos = async (req, res) => {
    const idUser = parseInt(req.params.idUser);
    const result = [];
    await client.connect();
    const pedidos = client.db(`${process.env.MONGO_DATABASE}`).collection('pedidosUser');

    const filter = { idUser: idUser };
    await pedidos.find(filter).forEach((p) => result.push(p));
    res.status(200).send({ result });


}

exports.getPedidoProd = async (req, res) => {
    
    const result = [];
    await client.connect();
    const pedidos = client.db(`${process.env.MONGO_DATABASE}`).collection('pedidosUser');

    const filter = { descricaoProduct: "Celular Phone " };
    await pedidos.find(filter).forEach((p) => result.push(p));
    res.status(200).send({ result });

}

