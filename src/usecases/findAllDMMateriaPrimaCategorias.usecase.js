const DMMateriaPrimaCategoriaModel = require('../models/dMMateriaPrimaCategoria.model');
exports.findAllDMMateriaPrimaCategorias = async () => { const items = await DMMateriaPrimaCategoriaModel.findAllDMMateriaPrimaCategorias(); return { items }; };
