const mongoose = require('mongoose');

const Products = mongoose.model('Product');

module.exports = {
    async index(req, res){
        const {page = 1} = req.query;
        const products = await Products.paginate({}, { page , limit: 10 });
        //Products.find(): para mostrar todos os registros do banco de dados

        return res.json(products);
    },
    async store(req, res){
        const product = await Products.create(req.body);
        //req.body: pega as informaçoes do body

        return res.json(product);
    },

    async show (req, res){
        const product = await Products.findById(req.params.id);
        //req.params.id: pega o produto pelo id

        return res.json(product);
    },

    async update (req,res){
        const product = await Products.findByIdAndUpdate(req.params.id, req.body, {new:true})
        //req.params.id: pega o produto pelo id
        //req.body: pega as informaçoes do body
        //{new:true}: manda o produto já atualizado

        return res.json(product)
    },

    async destroy(req,res){
        await Products.findByIdAndRemove(req.params.id);

        return res.send();
    }
};