const SimulationsOrdersPurchasingsModel = require('../models/simulationsOrdersPurchasings.model');
exports.deleteSimulationsOrdersPurchasings = async (id) => { const item = await SimulationsOrdersPurchasingsModel.deleteSimulationsOrdersPurchasings(id); return { item }; };
