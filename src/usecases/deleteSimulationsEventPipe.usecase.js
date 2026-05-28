const SimulationsEventPipeModel = require('../models/simulationsEventPipe.model');
exports.deleteSimulationsEventPipe = async (id) => { const item = await SimulationsEventPipeModel.deleteSimulationsEventPipe(id); return { item }; };
