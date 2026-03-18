const DMEventPipeModel = require('../models/dMEventPipe.model');
exports.deleteDMEventPipe = async (id) => { const item = await DMEventPipeModel.deleteDMEventPipe(id); return { item }; };
