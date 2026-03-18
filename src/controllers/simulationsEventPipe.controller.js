const findAllUC = require('../usecases/findAllSimulationsEventPipes.usecase');
const findByIdUC = require('../usecases/findByIdSimulationsEventPipe.usecase');
const createUC = require('../usecases/createSimulationsEventPipe.usecase');
const updateUC = require('../usecases/updateSimulationsEventPipe.usecase');
const deleteUC = require('../usecases/deleteSimulationsEventPipe.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllSimulationsEventPipes(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdSimulationsEventPipe(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createSimulationsEventPipe(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updateSimulationsEventPipe(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deleteSimulationsEventPipe(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
