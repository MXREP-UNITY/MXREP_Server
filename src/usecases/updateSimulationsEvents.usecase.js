const SimulationsEventsModel = require('../models/simulationsEvents.model');
exports.updateSimulationsEvents = async (id, data) => { const item = await SimulationsEventsModel.updateSimulationsEvents(id, data); return { item }; };
