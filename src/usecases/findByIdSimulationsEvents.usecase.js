const SimulationsEventsModel = require('../models/simulationsEvents.model');
exports.findByIdSimulationsEvents = async (id) => { const item = await SimulationsEventsModel.findByIdSimulationsEvents(id); return { item }; };
