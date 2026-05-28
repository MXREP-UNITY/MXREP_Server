const SDMTransporteModel = require('../models/sDMTransporte.model');
exports.deleteSDMTransporte = async (id) => { const item = await SDMTransporteModel.deleteSDMTransporte(id); return { item }; };
