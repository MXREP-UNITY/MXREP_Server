const DMMateriaPrimaCategoriaModel = require('../models/dMMateriaPrimaCategoria.model');
exports.deleteDMMateriaPrimaCategoria = async (id) => { const item = await DMMateriaPrimaCategoriaModel.deleteDMMateriaPrimaCategoria(id); return { item }; };
