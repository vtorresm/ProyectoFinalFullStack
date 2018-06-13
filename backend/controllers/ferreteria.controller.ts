const Ferreteria = require('../models/ferreteriaModel');

const ferreteriaCtrl = {

    getFerreterias : async (req, res, next) => {
        const ferreteriasProd = await Ferreteria.find();
        res.json(ferreteriasProd);
    },

    createProdFerreteria : async (req, res, next) => {
        const ferreteria = new Ferreteria({
            nomProdFerreteria: req.body.nomProdFerreteria,
            descripcion: req.body.descripcion,
            marca: req.body.marca,
            precio: req.body.precio
        });
        await ferreteria.save();
        res.json({status: 'Producto creado'});
    },

    getFerreteria : async (req, res, next) => {
        const { id } = req.params;
        const ferreteria = await Ferreteria.findById(id);
        res.json(ferreteria);
    },

    editFerreteria : async (req, res, next) => {
        const { id } = req.params;
        const ferreteria = {
            nomProdFerreteria: req.body.nomProdFerreteria,
            descripcion: req.body.descripcion,
            marca: req.body.marca,
            precio: req.body.precio
        };
        await Ferreteria.findByIdAndUpdate(id, {$set: ferreteria}, {new: true});
        res.json({status: 'Producto actualizado'});
    },

    deleteFerreteria : async (req, res, next) => {
        await Ferreteria.findByIdAndRemove(req.params.id);
        res.json({status: 'Producto eliminado'});
    }
};

module.exports = ferreteriaCtrl;