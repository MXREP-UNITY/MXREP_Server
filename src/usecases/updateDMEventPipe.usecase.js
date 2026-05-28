const DMEventPipeModel = require('../models/dMEventPipe.model');
exports.updateDMEventPipe = async (id, data) => { const item = await DMEventPipeModel.updateDMEventPipe(id, data); return { item }; };
