const SimulationsOrdersPurchasingsModel = require('../models/simulationsOrdersPurchasings.model');
exports.findByIdSimulationsOrdersPurchasings = async (id) => { const item = await SimulationsOrdersPurchasingsModel.findByIdSimulationsOrdersPurchasings(id); return { item }; };
