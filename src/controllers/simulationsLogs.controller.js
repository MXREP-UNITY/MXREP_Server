const findAllUC = require('../usecases/findAllSimulationsLogss.usecase');
const findByIdUC = require('../usecases/findByIdSimulationsLogs.usecase');
const createUC = require('../usecases/createSimulationsLogs.usecase');
const updateUC = require('../usecases/updateSimulationsLogs.usecase');
const deleteUC = require('../usecases/deleteSimulationsLogs.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllSimulationsLogss(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdSimulationsLogs(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createSimulationsLogs(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updateSimulationsLogs(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deleteSimulationsLogs(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
