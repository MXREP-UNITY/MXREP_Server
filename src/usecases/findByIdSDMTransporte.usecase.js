const SDMTransporteModel = require('../models/sDMTransporte.model');
exports.findByIdSDMTransporte = async (id) => { const item = await SDMTransporteModel.findByIdSDMTransporte(id); return { item }; };
