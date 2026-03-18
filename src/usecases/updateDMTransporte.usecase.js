const DMTransporteModel = require('../models/dMTransporte.model');
exports.updateDMTransporte = async (id, data) => { const item = await DMTransporteModel.updateDMTransporte(id, data); return { item }; };
