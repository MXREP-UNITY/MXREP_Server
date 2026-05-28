const DMMateriaPrimaCategoriaModel = require('../models/dMMateriaPrimaCategoria.model');
exports.createDMMateriaPrimaCategoria = async (data) => { const item = await DMMateriaPrimaCategoriaModel.createDMMateriaPrimaCategoria(data); return { item }; };
