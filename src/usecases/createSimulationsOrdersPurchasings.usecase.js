const SimulationsOrdersPurchasingsModel = require('../models/simulationsOrdersPurchasings.model');
exports.createSimulationsOrdersPurchasings = async (data) => { const item = await SimulationsOrdersPurchasingsModel.createSimulationsOrdersPurchasings(data); return { item }; };
