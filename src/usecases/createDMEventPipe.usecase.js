const DMEventPipeModel = require('../models/dMEventPipe.model');
exports.createDMEventPipe = async (data) => { const item = await DMEventPipeModel.createDMEventPipe(data); return { item }; };
