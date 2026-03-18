const DMTransporteModel = require('../models/dMTransporte.model');
exports.createDMTransporte = async (data) => { const item = await DMTransporteModel.createDMTransporte(data); return { item }; };
