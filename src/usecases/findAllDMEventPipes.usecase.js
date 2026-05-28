const DMEventPipeModel = require('../models/dMEventPipe.model');
exports.findAllDMEventPipes = async () => { const items = await DMEventPipeModel.findAllDMEventPipes(); return { items }; };
