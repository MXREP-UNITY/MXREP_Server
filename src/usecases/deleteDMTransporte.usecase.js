const DMTransporteModel = require('../models/dMTransporte.model');
exports.deleteDMTransporte = async (id) => { const item = await DMTransporteModel.deleteDMTransporte(id); return { item }; };
