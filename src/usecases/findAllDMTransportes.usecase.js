const DMTransporteModel = require('../models/dMTransporte.model');
exports.findAllDMTransportes = async () => { const items = await DMTransporteModel.findAllDMTransportes(); return { items }; };
