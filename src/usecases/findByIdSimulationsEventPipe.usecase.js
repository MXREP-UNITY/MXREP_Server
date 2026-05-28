const SimulationsEventPipeModel = require('../models/simulationsEventPipe.model');
exports.findByIdSimulationsEventPipe = async (id) => { const item = await SimulationsEventPipeModel.findByIdSimulationsEventPipe(id); return { item }; };
