const SimulationsEventsModel = require('../models/simulationsEvents.model');
exports.findAllSimulationsEventss = async () => { const items = await SimulationsEventsModel.findAllSimulationsEventss(); return { items }; };
