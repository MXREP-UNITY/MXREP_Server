const SimulationsOrdersPurchasingsModel = require('../models/simulationsOrdersPurchasings.model');
exports.updateSimulationsOrdersPurchasings = async (id, data) => { const item = await SimulationsOrdersPurchasingsModel.updateSimulationsOrdersPurchasings(id, data); return { item }; };
