const SimulationsEventsModel = require('../models/simulationsEvents.model');
exports.deleteSimulationsEvents = async (id) => { const item = await SimulationsEventsModel.deleteSimulationsEvents(id); return { item }; };
