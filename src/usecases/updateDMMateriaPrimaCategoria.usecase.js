const DMMateriaPrimaCategoriaModel = require('../models/dMMateriaPrimaCategoria.model');
exports.updateDMMateriaPrimaCategoria = async (id, data) => { const item = await DMMateriaPrimaCategoriaModel.updateDMMateriaPrimaCategoria(id, data); return { item }; };
