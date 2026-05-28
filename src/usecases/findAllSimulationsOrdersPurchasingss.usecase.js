const SimulationsOrdersPurchasingsModel = require('../models/simulationsOrdersPurchasings.model');
exports.findAllSimulationsOrdersPurchasingss = async () => { const items = await SimulationsOrdersPurchasingsModel.findAllSimulationsOrdersPurchasingss(); return { items }; };
