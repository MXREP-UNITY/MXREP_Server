const SimulationsEventsModel = require('../models/simulationsEvents.model');
exports.createSimulationsEvents = async (data) => { const item = await SimulationsEventsModel.createSimulationsEvents(data); return { item }; };
