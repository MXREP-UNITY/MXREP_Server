const findAllUC = require('../usecases/findAllDMEventPipes.usecase');
const findByIdUC = require('../usecases/findByIdDMEventPipe.usecase');
const createUC = require('../usecases/createDMEventPipe.usecase');
const updateUC = require('../usecases/updateDMEventPipe.usecase');
const deleteUC = require('../usecases/deleteDMEventPipe.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllDMEventPipes(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdDMEventPipe(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createDMEventPipe(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updateDMEventPipe(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deleteDMEventPipe(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
