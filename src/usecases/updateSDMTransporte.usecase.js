const SDMTransporteModel = require('../models/sDMTransporte.model');
exports.updateSDMTransporte = async (id, data) => { const item = await SDMTransporteModel.updateSDMTransporte(id, data); return { item }; };
