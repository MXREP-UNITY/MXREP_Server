const SDMTransporteModel = require('../models/sDMTransporte.model');
exports.createSDMTransporte = async (data) => { const item = await SDMTransporteModel.createSDMTransporte(data); return { item }; };
