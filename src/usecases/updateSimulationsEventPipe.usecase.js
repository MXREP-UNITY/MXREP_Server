const SimulationsEventPipeModel = require('../models/simulationsEventPipe.model');
exports.updateSimulationsEventPipe = async (id, data) => { const item = await SimulationsEventPipeModel.updateSimulationsEventPipe(id, data); return { item }; };
