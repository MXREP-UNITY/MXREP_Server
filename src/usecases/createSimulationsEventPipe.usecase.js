const SimulationsEventPipeModel = require('../models/simulationsEventPipe.model');
exports.createSimulationsEventPipe = async (data) => { const item = await SimulationsEventPipeModel.createSimulationsEventPipe(data); return { item }; };
