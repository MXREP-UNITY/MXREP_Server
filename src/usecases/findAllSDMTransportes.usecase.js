const SDMTransporteModel = require('../models/sDMTransporte.model');
exports.findAllSDMTransportes = async () => { const items = await SDMTransporteModel.findAllSDMTransportes(); return { items }; };
