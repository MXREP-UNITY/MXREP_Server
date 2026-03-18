const DMMateriaPrimaCategoriaModel = require('../models/dMMateriaPrimaCategoria.model');
exports.findByIdDMMateriaPrimaCategoria = async (id) => { const item = await DMMateriaPrimaCategoriaModel.findByIdDMMateriaPrimaCategoria(id); return { item }; };
