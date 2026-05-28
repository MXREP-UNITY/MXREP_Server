const SimulationsEventPipeModel = require('../models/simulationsEventPipe.model');
exports.findAllSimulationsEventPipes = async () => { const items = await SimulationsEventPipeModel.findAllSimulationsEventPipes(); return { items }; };
