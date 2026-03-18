const DMTransporteModel = require('../models/dMTransporte.model');
exports.findByIdDMTransporte = async (id) => { const item = await DMTransporteModel.findByIdDMTransporte(id); return { item }; };
