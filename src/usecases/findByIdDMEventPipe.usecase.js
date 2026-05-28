const DMEventPipeModel = require('../models/dMEventPipe.model');
exports.findByIdDMEventPipe = async (id) => { const item = await DMEventPipeModel.findByIdDMEventPipe(id); return { item }; };
